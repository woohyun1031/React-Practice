import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDownloadURL, ref, uploadBytesResumable  } from 'firebase/storage';
import { storage } from '../../shared/firebase';

// export const uploadImage = createAsyncThunk(
// 	'user/uploadImage',
// 	async (image_File:File,thunkAPI) => {
// 		try {      
//       console.log(image_File)      
//       const storageRef = ref(storage, `images/${image_File.name}`);      
// 		  const uploadTask = uploadBytesResumable(storageRef, image_File);      
//       uploadTask.on('state_changed',
//       (snapshot) => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log('Upload is ' + progress + '% done');
//         switch (snapshot.state) {
//           case 'paused':
//             console.log();
//             break;
//           case 'running':
//             thunkAPI.dispatch(uploading())
//             console.log();
//             break;
//         }
//       }, (error) => {
//         console.log(error,'error');
//       }, () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         console.log('File available at', downloadURL);      
//         thunkAPI.dispatch(uploadComplete(downloadURL))        
//         })
//       })         
// 		} catch (error) {
// 			alert(`알 수 없는 오류: ${error}`);			 
// 		}
// 	}
// );


//initialState
const initialState= {
	image_url:'',
  uploading:true,
  preview:''
};

export const image = createSlice({
	name: 'post',
	initialState,	
  reducers:{    
		uploadComplete : (state,actions) => {			
			state.image_url = actions.payload
      state.preview = ''
			state.uploading = true;      
		},
    uploading : (state) => {						
			state.uploading = false;      
		},
    setPreviewUrl : (state,actions) => {
      state.preview = actions.payload			      
    },    


  },
	},
);

export const {uploadComplete, uploading,setPreviewUrl } = image.actions;
export default image.reducer;
