// import * as ImagePicker from 'expo-image-picker';
// import { getFirestore, getDoc, collection } from 'firebase/firestore';
// import { Formik } from 'formik';
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import { app } from '../firebaseConfig';

// const placeholder = require('./../assets/images/images.png');

// export default function AddPostScreen() {
//   const [categoryList, setCategoryList] = useState([]);
//   const [image, setImage] = useState(null);
//   const db = getFirestore(app);

//   useEffect(() => {
//     getCategoryList();
//   }, []);
//   const getCategoryList = async () => {
//     setCategoryList([]);
//     const querySnapshot = await getDoc(collection(db, 'Category'));

//     querySnapshot.forEach((doc) => {
//       console.log('Docs:', doc.data());
//     });
//   };

//   // const getCategoryList = async () => {
//   //   const querySnapshot = await getDoc(collection(db, 'Category'));
//   //   querySnapshot.forEach((doc) => {
//   //     console.log('Docs:', doc.data());
//   //     setCategoryList((categoryList) => [...categoryList, doc.data()]);
//   //   });
//   // };

//   //use pick image
//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   const onSubmitMethot = (value) => {
//     value.image = image;
//   };

//   const upload = (values) => {};

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <Text style={styles.title}>Add New Post</Text>
//       <Text style={styles.createText}>Create New Post and Start Selling</Text>

//       <Formik
//         initialValues={{ title: '', decs: '', category: '', address: '', price: '', image: '' }}
//         onSubmit={(value) => onSubmitMethot(value)}>
//         {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
//           <View>
//             <TouchableOpacity style={{ alignItems: 'center' }} onPress={pickImage}>
//               {image ? (
//                 <Image source={{ uri: image }} style={styles.image} />
//               ) : (
//                 <Image source={placeholder} style={styles.image} />
//               )}
//             </TouchableOpacity>
//             <TextInput
//               placeholder="Title"
//               style={styles.input}
//               value={values?.title}
//               onChangeText={handleChange('title')}
//             />
//             <TextInput
//               placeholder="Description"
//               style={styles.inputDecs}
//               value={values?.decs}
//               onChangeText={handleChange('decs')}
//               numberOfLines={5}
//             />
//             <TextInput
//               placeholder="Price"
//               style={styles.input}
//               value={values?.price}
//               onChangeText={handleChange('price')}
//               keyboardType="number-pad"
//             />
//             <TextInput
//               placeholder="Address"
//               style={styles.input}
//               value={values?.address}
//               onChangeText={handleChange('address')}
//               keyboardType="number-pad"
//             />

//             <TouchableOpacity onPress={handleSubmit} style={styles.button}>
//               <Text style={styles.buttonText}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </Formik>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 27,
//     fontWeight: 'bold',
//     margin: 10,
//   },
//   createText: {
//     fontSize: 16,
//     color: 'grey',
//     left: 10,
//   },
//   input: {
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 10,
//     margin: 10,
//     fontSize: 17,
//   },
//   inputDecs: {
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 10,
//     margin: 10,
//     fontSize: 17,
//     height: '10%',
//     textAlignVertical: 'top',
//   },
//   button: {
//     height: 50,
//     width: '90%',
//     backgroundColor: '#387ADF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 20,
//     left: 22,
//     top: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 17,
//   },
//   image: {
//     height: 100,
//     width: 100,
//     borderRadius: 10,
//   },
// });
