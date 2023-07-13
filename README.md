
# LaundryBook

A Laundry management application Powered by React Native and Firebase. The app is built using React Native, a popular framework for developing cross-platform mobile applications, and it integrates with Firebase, a powerful backend-as-a-service platform.


## Features

- User authentication: The app provides user registration and login functionality using Firebase Authentication. Users can create accounts, log in, and access personalized content and features.

- Real-time data synchronization: Firebase Realtime Database is used to enable real-time synchronization of data between the app and the backend. This allows users to receive updates and notifications in real-time, ensuring a seamless user experience.

- Cloud storage: The app utilizes Firebase Cloud Storage to enable users to upload and store files securely in the cloud. This feature is particularly useful for scenarios such as uploading profile pictures or sharing media files.

- Cart System: The app includes a user-friendly cart system for adding, and removing items. This feature enhances the user experience by providing a convenient way to manage and keep track of selected items for purchase.

- Checkout Page: The app includes a checkout page which displays a summary of the selected items, their quantities, and the total price. Users can provide shipping and payment information to finalize the transaction. The checkout page streamlines the purchasing process and ensures a smooth user experience.

- Current Location: The app leverages the device's location services to provide the user's current location information. This feature enables location-based functionalities such as finding nearby stores,and calculating shipping costs based on the delivery address. By utilizing the user's current location, the app can offer personalized and location-specific services, enhancing the overall user experience.


## Base Dependencies

- [react-navigation](https://reactnavigation.org/) to manage navigation through all screens.
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management.
- [expo-location](https://docs.expo.dev/versions/latest/sdk/location/) to access the device's location information. 
- [Firebase](https://firebase.google.com/) simplify backend development tasks, including user authentication, real-time database, and cloud storage.
- [Lottie](https://docs.expo.dev/versions/latest/sdk/lottie/) allows rendering After Effects animations.
- React native horizontal [DatePicker](https://github.com/AwrminKhodaei/react-native-horizontal-datepicker) 
- [Image Slider](https://www.npmjs.com/package/react-native-image-slider-box) to improve the visual appeal of the application.

## Run Locally

Clone the project

```bash
  git clone https://github.com/payal-gitport/laundryBook
```

Go to the project directory

```bash
  cd laundryBook
```

Install dependencies

```bash
  npm install
```

Start the project

```bash
  expo start
```

