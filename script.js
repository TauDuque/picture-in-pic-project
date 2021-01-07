const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//prompt pra selecionar um stream, passar o elemento de video e dar play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("whooops, error", error);
  }
}

button.addEventListener("click", async () => {
  //desativar botão
  button.disabled = true;
  //começar picture in picture
  await videoElement.requestPictureInPicture();
  //resetar o botão
  button.disabled = false;
});

selectMediaStream();
