// bucket.js

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
export const loadBucket = (bucket) => {
    console.log("load실행")
    return { type: LOAD, bucket };
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

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/LOAD":{
        return {...state, list:action.bucket}
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