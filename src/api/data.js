// export const getData = async (val) => {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '08c437c219mshf0a82642cb67f8dp1e874bjsn467aaa79bd8c',
//             'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
//         }
//     };
//     let URL = `https://twitter154.p.rapidapi.com/user/details?username=JanaSunrise`
//     fetch(URL, options)
//         .then(response => response.json())
//         .then(response => {
//             return response;
//             // console.log(response);
//             // let json = response;
//             // let totaltweet = json.number_of_tweets;
//             // let followers_count = json.follower_count;
//             // let following_count = json.following_count;
//             // let profile_image = json.profile_pic_url;
//             // let name = json.name;
//             // let twtBanner = json.profile_banner_url;
//             // let desc = json.description;
//             // let plusValue = Intl.NumberFormat("en-US");
//             // totaltweet = plusValue.format(totaltweet);
//             // let plusValue2 = Intl.NumberFormat("en-US");
//             // followers_count = plusValue2.format(followers_count);
//             // let plusValue3 = Intl.NumberFormat("en-US");
//             // following_count = plusValue3.format(following_count);
//             // profile_image = profile_image.replace("_normal", "");
//             // username.innerHTML = json.is_verified ? `${name} <i class="bi bi-patch-check-fill"></i>` : name;
//             // twtHandle.innerHTML = '@' + inputVal;
//         })
//         // .catch(err => console.error(err));
// }