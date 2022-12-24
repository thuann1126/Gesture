import app from "../firebase"

export default function Alphabet() {

    var alphaUrl = ''
    // Points to the root reference
    var storageRef = app.storage().ref();

    // Points to 'images'
    var imagesRef = storageRef.child('lessons');

    // Points to 'images/space.jpg'
    // Note that you can use variables to create child values
    var fileName = 'alphabet_a.png';
    var spaceRef = imagesRef.child(fileName).getDownloadURL().then((url => {
        alphaUrl = url
        document.querySelector('img').src = alphaUrl;
    }))

    // File path is 'images/space.jpg'
    var path = spaceRef.fullPath;

    // File name is 'space.jpg'
    var name = spaceRef.name;

    // Points to 'images'
    var imagesRef = spaceRef.parent;

    console.log(alphaUrl)

    return (
        <>
            <div>

                <img src="alphaUrl" alt="no images" />
            </div>
        </>
    )
}