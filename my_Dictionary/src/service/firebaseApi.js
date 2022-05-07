import {collection, addDoc,getDocs, doc, deleteDoc } from "firebase/firestore";

class FirebaseApi {
    constructor (db){
        this.db = db
    }
    async getbucket(){
        const bucketList = []
        const getbucketList = await getDocs(collection(this.db, "bucket"));
        getbucketList.forEach((doc) => {
            bucketList.push({...doc.data()})
        });
        return bucketList
    }

    async addbucket(title,contents,example,id_val){
        return  await addDoc(collection(this.db, "bucket"), {
            title,
            contents,
            example,
            id_val
            })
    }

    async deletebucket(id_val){
        await deleteDoc(doc(this.db, "bucket", id_val));
    }
    
}
export default FirebaseApi