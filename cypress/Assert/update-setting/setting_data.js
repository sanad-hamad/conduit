let imagePath="https://www.testim.io/wp-content/uploads/2019/11/Test-Automation-vs-Manual-Testing-Picking-the-Right-Balance-1.jpg";
const dataSetToUpdateSetting=[
                           {
                              username:"Sanad",
                              testName:"update username"
                           },
                           {
                              bio:"make manual testing",
                              testName:"update short bio"
                           },
                           {
                              imageUrl:imagePath,
                              testName:"update the profile image"
                           },
                           {
                              imageUrl:imagePath,
                              username:"Sanad",
                              bio:"verify all fields is work",
                              testName:"update profile (username,bio,image)"
                           }
                        ]

export{dataSetToUpdateSetting}