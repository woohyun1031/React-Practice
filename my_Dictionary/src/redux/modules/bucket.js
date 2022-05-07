import db from '../../service/firebase';
import {collection, addDoc,getDocs, doc, deleteDoc, getDoc, documentId } from "firebase/firestore";
//import FirebaseApi from '../../service/firebaseApi';

// bucket.js
//const firebaseApis = new FirebaseApi(db)

// Actions
const LOAD = "bucket/LOAD";
const CREATE = 'bucket/CREATE';
const REMOVE = 'bucket/REMOVE';
const TOGGLE = 'bucket/TOGGLE';

//Initial
const initialState = {
    list : [],
    open : false
}

// Action Creators
export function loadBucket(bucket_list){
    console.log("load실행")
    return { type: LOAD, bucket_list };
}
export function createBucket(bucket) {
    console.log("create실행")
    return {type: CREATE, bucket: bucket};
}

export function removeBucket(bucket_id) {
    console.log("remove실행")
    return {type: REMOVE, bucket_id: bucket_id};
}
export function changeToggle(open) {
    console.log("toggle실행")
    return {type: TOGGLE, open: open};
}

//middleware
export const loadBucketFB = () =>{
    return async function (dispatch){
        console.log("ㅅㅂ")
        const bucket_data = await getDocs(collection(db,"bucket"));
        console.log(bucket_data,"bucket_data");

        let bucket_list = [];
        bucket_data.forEach((doc)=>{
            console.log(doc.data()); 
            bucket_list.push({id:doc.id,...doc.data()})
        }); 
        console.log(bucket_list);

        dispatch(loadBucket(bucket_list));
    }
}

export const addBucketFB = (bucket) =>{
    return async function(dispatch){
        const docRef = await addDoc(collection(db,"bucket"),bucket);
        const _bucket = await getDoc(docRef);
        const bucket_data = {id: _bucket.id, ..._bucket.data()}        
        console.log(docRef.id,"docRef");

        dispatch(createBucket(bucket_data));
    }
} 

export const deleteBucketFB = (bucket_id,bucket_id_val) => {
    console.log(bucket_id)
    console.log(bucket_id_val)
    return async function (dispatch) {
      await deleteDoc(doc(db, "bucket", bucket_id));
       dispatch(removeBucket(bucket_id_val));
    }
  }


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/LOAD":{
        return {...state, list:action.bucket_list}
    }
    case "bucket/CREATE":{
        const new_bucket_list = [...state.list, action.bucket];
        return {...state,list:new_bucket_list};
    }
    case "bucket/REMOVE": {
        console.log(action.bucket_id,"action.bucket_id")
        const new_bucket_list= state.list.filter( user => user.id_val !== action.bucket_id);
        console.log(state.list,"new_remove_list")
        return {...state, list:new_bucket_list};
    }
    case "bucket/TOGGLE": {
        const new_open = !action.open;
        console.log(new_open,"open")
        return {...state,open:new_open};
    }
    // do reducer stuff
    default:        
         return state;
  }
}