import React, { useState ,useEffect} from 'react';

import { StyleSheet, Text, View, Button, Alert, ActivityIndicator } from 'react-native';
import * as Updates from 'expo-updates';


// import {  } from 'react-native';





export default function About() {
  const [loading, setLoading] = useState(false);
  // const appVersion = Constants.expoConfig.version || 'Not available';
  // console.log(appVersion,'hjj')
  const [updateAvailable, setUpdateAvailable] = useState(false);




  // useEffect(() => {
  //   async function checkForUpdates() {
  //     try {
  //       const update = await Updates.checkForUpdateAsync();
  //       if (update.isAvailable) {
  //         await Updates.fetchUpdateAsync();
  //         Alert.alert(
  //           'Update Available',
  //           'A new update is available. Restart the app to apply the update.',
  //           [
  //             { text: 'Restart', onPress: () => Updates.reloadAsync() }
  //           ]
  //         );
  //       }
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }

  //   checkForUpdates();
  // }, []);








  const checkForUpdates = async () => {
    setLoading(true);
    try {
      // Check if an update is available
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        setUpdateAvailable(true);
        Alert.alert(
          'Update Available',
          'A new update is available. Do you want to update now?',
          [
            {
              text: 'Update',
              onPress: async () => {
                await Updates.fetchUpdateAsync();
                Updates.reloadAsync();
              }
            },
            { text: 'Later' }
          ]
        );
      } else {
        Alert.alert('No updates available');
      }
    } catch (e) {
      console.error('Error checking for updates:', e);
    } finally {
      setLoading(false);
    }
  };






  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, this is fffff Naresh</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Check for Updates" onPress={checkForUpdates} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
});








// import React, { useEffect } from 'react';
// import { Alert ,View,Text} from 'react-native';
// import * as Updates from 'expo-updates';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// async function checkForUpdates() {
//   try {
//     const update = await Updates.checkForUpdateAsync();
//     if (update.isAvailable) {
//       await Updates.fetchUpdateAsync();
      
//       // Save update prompt state to AsyncStorage
//       await AsyncStorage.setItem('updatePromptShown', 'true');

//       Alert.alert(
//         'Update Available',
//         'A new update is available. Restart the app to apply the update.',
//         [
//           { text: 'Restart', onPress: async () => {
//               await Updates.reloadAsync();
//             }
//           }
//         ]
//       );
//     } else {
//       // Reset the update prompt state if no update is available
//       await AsyncStorage.removeItem('updatePromptShown');
//     }
//   } catch (e) {
//     console.error(e);
//   }
// }



// function About() {





//   useEffect(() => {
//     async function initializeUpdateCheck() {
//       const updatePromptShown = await AsyncStorage.getItem('updatePromptShown');
//       if (updatePromptShown !== 'true') {
//         checkForUpdates();
//       }
//     }

//     initializeUpdateCheck();
//   }, []);

//   return (
//     // Your app component code
//     <View>
//     <Text>This is Dinesh</Text>
//     </View>
//   );
// }

// export default About;




// App.js
// import React, { useEffect, useState } from 'react';
// import { View, ActivityIndicator ,Text} from 'react-native';
// import * as Updates from 'expo-updates';
// import UpgradePrompt from './UpgradePrompt';



// const About = () => {
//   const [updateAvailable, setUpdateAvailable] = useState(false);
//   const [isUpdating, setIsUpdating] = useState(false);

//   useEffect(() => {
//     const checkForUpdate = async () => {
//       try {
//         const update = await Updates.checkForUpdateAsync();
//         if (update.isAvailable) {
//           setUpdateAvailable(true);
//         }
//       } catch (e) {
//         console.error(e);
//       }
//     };

//     checkForUpdate();
//   }, []);

//   const handleUpgrade = async () => {
//     setIsUpdating(true);
//     try {
//       await Updates.fetchUpdateAsync();
//       await Updates.reloadAsync();
//     } catch (e) {
//       console.error(e);
//       setIsUpdating(false);
//     }
//   };

//   if (isUpdating) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }




//   const HomeScreen = () => {
//     return (
//       <View >
//         <Text >Welcome to the App! this is naresh</Text>
//       </View>
//     );
//   };
//   return (
//     <View >
//       {updateAvailable ? <UpgradePrompt onUpgrade={handleUpgrade} /> : <HomeScreen />}
//     </View>
//   );
// };

// export default About;


















// App.js     newupdate





// import React, { useState ,useEffect} from 'react';
// import { Modal, View, Text, Button, StyleSheet ,ActivityIndicator} from 'react-native';
// import * as Updates from 'expo-updates';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// export default function About() {
//   // const [modalVisible, setModalVisible] = useState(false);
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [updateAvailable, setUpdateAvailable] = useState(false);


//   const checkForUpdate = async () => {
//     try {
//       const update = await Updates.checkForUpdateAsync();
//       if (update.isAvailable) {
//         await AsyncStorage.setItem('updatePromptShown', 'true');

//       }
//     } catch (e) {
//       console.error(e);
//     }
//   };

  
//   useEffect(() => {
   

//     checkForUpdate();
//   }, []);




//   async function initializeUpdateCheck() {
//     // console.log('jkjjhn')
//     const updatePromptShown = await AsyncStorage.getItem('updatePromptShown');
//     console.log(updatePromptShown,'updatePromptShown')
//     if (updatePromptShown === 'true') {
//       // console.log('kj')
//       setUpdateAvailable(true);

//     }else{
//       checkForUpdate();

//     }
//   }


//   initializeUpdateCheck();



//   const handleUpgrade = async () => {
//     setIsUpdating(true);
//     try {
//       await Updates.fetchUpdateAsync();
//       await Updates.reloadAsync();
//       await AsyncStorage.removeItem('updatePromptShown');
//       setUpdateAvailable(false);

//     } catch (e) {
//       console.error(e);
//       setIsUpdating(false);
//     }
//   };



//   if (isUpdating) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }




//   // const HomeScreen = () => {
//   //   return (
//   //     <View >
//   //       <Text >Welcome to the App! this is naresh</Text>
//   //     </View>
//   //   );
//   // };

//   return (
//     <View style={styles.container}>
//       {/* <Button
//         title="Show Modal"
//         onPress={() => setModalVisible(true)}
//       /> */}

//       <Text>hlo this is update Version Rakesh.</Text>

//       <Modal
//         transparent={true}
//         animationType="slide"
//         visible={updateAvailable}
//         onRequestClose={handleUpgrade}
//       >
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalText}>Hello, this is new version 2.0 update version!</Text>
//             <Button
//               title="Update"
//               onPress={handleUpgrade}
//             />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContainer: {
//     width: 300,
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
// });















// // App.js
// import React, { useEffect, useState } from 'react';
// import { View, ActivityIndicator, Alert, StyleSheet , Text, Button } from 'react-native';
// import * as Updates from 'expo-updates';
// import UpgradePrompt from './UpgradePrompt';
// // import HomeScreen from './HomeScreen'; // Replace with your main component

// const About = () => {
//   const [updateAvailable, setUpdateAvailable] = useState(false);
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [showPrompt, setShowPrompt] = useState(false);

//   useEffect(() => {
//     const checkForUpdate = async () => {
//       try {
//         const update = await Updates.checkForUpdateAsync();
//         if (update.isAvailable) {
//           setUpdateAvailable(true);
//           setShowPrompt(true); // Show prompt if update is available
//         }
//       } catch (e) {
//         console.error(e);
//       }
//     };

//     checkForUpdate();
//   }, []);





//   const handleUpgrade = async () => {
//     setIsUpdating(true);
//     try {
//       await Updates.fetchUpdateAsync();
//       await Updates.reloadAsync();
//     } catch (e) {
//       console.error(e);
//       setIsUpdating(false);
//     }
//   };

//   const handleClosePrompt = () => {
//     setShowPrompt(false);
//   };




//   if (isUpdating) {
//     return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
//   }


//   const HomeScreen = () => {
//     const handleAction = () => {
//       Alert.alert('Action Button Pressed', 'You can handle actions here.');
//     };
  
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Welcome to the Home Screen!</Text>
//         <Button title="Perform Action" onPress={handleAction} />
//       </View>
//     );
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {showPrompt ? (
//         <UpgradePrompt onUpgrade={handleUpgrade} onClose={handleClosePrompt} />
//       ) : (
//         <HomeScreen />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default About;


































// import React, { useEffect, useState } from 'react';
// import { Alert, Button, View, Text } from 'react-native';
// import * as Updates from 'expo-updates';

// const About = () => {
//   const [updateAvailable, setUpdateAvailable] = useState(false);
//   const [updateVersion, setUpdateVersion] = useState('');
//   const [currentVersion, setCurrentVersion] = useState('2.0.0'); // Your current app version

//   useEffect(() => {
//     const checkForUpdates = async () => {
//       try {
//         // Fetch the latest update
//         const update = await Updates.checkForUpdateAsync();

//         if (update.isAvailable) {
//           const updateManifest = await Updates.fetchUpdateAsync();
//           const newVersion = updateManifest.manifest.version;
//           setUpdateVersion(newVersion);

//           // Compare versions
//           if (isNewerVersion(currentVersion, newVersion)) {
//             setUpdateAvailable(true);
//           }
//         }
//       } catch (e) {
//         console.error('Error checking for updates:', e);
//       }
//     };

//     checkForUpdates();
//   }, []);

//   const handleUpdate = async () => {
//     try {
//       await Updates.fetchUpdateAsync();
//       Alert.alert(
//         'Update Available',
//         `New update (${updateVersion}) downloaded. Restarting the app now.`,
//         [
//           {
//             text: 'OK',
//             onPress: () => {
//               Updates.reloadAsync();
//             },
//           },
//         ]
//       );
//     } catch (e) {
//       Alert.alert('Update Error', 'Error downloading the update. Please try again later.');
//       console.error('Error fetching update:', e);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Welcome to the app! this is Rakesh</Text>
//       {/* {updateAvailable && ( */}
//         <View>
//           <Text>A new version ({updateVersion}) is available!</Text>
//           <Button title="Update Now" onPress={handleUpdate} />
//         </View>
//       {/* )} */}
      
//     </View>
//   );
// };

// // Function to compare versions
// const isNewerVersion = (currentVersion, newVersion) => {
//   const [currentMajor, currentMinor, currentPatch] = currentVersion.split('.').map(Number);
//   const [newMajor, newMinor, newPatch] = newVersion.split('.').map(Number);

//   if (newMajor > currentMajor) return true;
//   if (newMajor === currentMajor && newMinor > currentMinor) return true;
//   if (newMajor === currentMajor && newMinor === currentMinor && newPatch > currentPatch) return true;
//   return false;
// };

// export default About;













// import React, { useEffect, useState } from 'react';
// import { Alert, Button, View, Text } from 'react-native';
// import * as Updates from 'expo-updates';

// const About = () => {
//   const [updateAvailable, setUpdateAvailable] = useState(false);
//   const [updateVersion, setUpdateVersion] = useState('');
//   const [currentVersion, setCurrentVersion] = useState('2.0.0'); // Your current app version

//   useEffect(() => {
//     const checkForUpdates = async () => {
//       try {
//         const update = await Updates.checkForUpdateAsync();
//         if (update.isAvailable) {
//           const updateManifest = await Updates.fetchUpdateAsync();
//           const newVersion = updateManifest.manifest.version;
//           console.log(newVersion)
//           setUpdateVersion(newVersion);

//           if (isNewerVersion(currentVersion, newVersion)) {
//             setUpdateAvailable(true);
//           }
//         }
//       } catch (e) {
//         console.error('Error checking for updates:', e);
//       }
//     };

//     checkForUpdates();
//   }, []);

//   // const handleUpdate = async () => {
//   //   try {
//   //     await Updates.fetchUpdateAsync();
//   //     Alert.alert(
//   //       'Update Available',
//   //       `New update (${updateVersion}) downloaded. Restarting the app now.`,
//   //       [
//   //         {
//   //           text: 'OK',
//   //           onPress: () => {
//   //             Updates.reloadAsync();
//   //           },
//   //         },
//   //       ]
//   //     );
//   //   } catch (e) {
//   //     Alert.alert('Update Error', 'Error downloading the update. Please try again later.');
//   //     console.error('Error fetching update:', e);
//   //   }
//   // };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Welcome to the app! This is Rakesh</Text>
//       {/* {updateAvailable && (
//         <View>
//           <Text>A new version ({updateVersion}) is available!</Text>
//           <Button title="Update Now" onPress={handleUpdate} />
//         </View>
//       )} */}
//     </View>
//   );
// };

// // Function to compare versions
// const isNewerVersion = (currentVersion, newVersion) => {
//   const [currentMajor, currentMinor, currentPatch] = currentVersion.split('.').map(Number);
//   const [newMajor, newMinor, newPatch] = newVersion.split('.').map(Number);

//   if (newMajor > currentMajor) return true;
//   if (newMajor === currentMajor && newMinor > currentMinor) return true;
//   if (newMajor === currentMajor && newMinor === currentMinor && newPatch > currentPatch) return true;
//   return false;
// };

// export default About;


// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, Alert, ActivityIndicator } from 'react-native';
// import * as Updates from 'expo-updates';

// export default function About() {
//   const [loading, setLoading] = useState(false);
//   const [updateAvailable, setUpdateAvailable] = useState(false);
//   const [currentVersion, setCurrentVersion] = useState('1.0'); // Assume current version
//   const [availableVersion, setAvailableVersion] = useState('');

//   const checkForUpdates = async () => {
//     setLoading(true);
//     try {
//       // Check if an update is available
//       const update = await Updates.checkForUpdateAsync();
//       if (update.isAvailable) {
//         // Fetch the manifest to get version details
//         const manifest = await Updates.fetchUpdateAsync();
//         const updateVersion = manifest?.manifest?.version || 'unknown';
//         setAvailableVersion(updateVersion);
//         setUpdateAvailable(true);

//         Alert.alert(
//           'Update Available',
//           `A new update (version ${updateVersion}) is available. Do you want to update now?`,
//           [
//             {
//               text: 'Update',
//               onPress: async () => {
//                 await Updates.fetchUpdateAsync();
//                 Updates.reloadAsync();
//               }
//             },
//             { text: 'Later' }
//           ]
//         );
//       } else {
//         Alert.alert('No updates available');
//       }
//     } catch (e) {
//       console.error('Error checking for updates:', e);
//       Alert.alert('Error', 'An error occurred while checking for updates.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hi, this is Naresh</Text>
//       <Text style={styles.versionText}>Current Version: {currentVersion}</Text>
//       {updateAvailable && <Text style={styles.versionText}>Available Version: {availableVersion}</Text>}
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <Button title="Check for Updates" onPress={checkForUpdates} />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 20,
//   },
//   versionText: {
//     fontSize: 16,
//     marginTop: 10,
//   },
// });
