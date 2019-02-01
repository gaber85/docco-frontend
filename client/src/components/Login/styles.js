const login = {
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

const welcome = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '24vh'
}

const title = {
  fontSize: '8vh'


}
const phrase = {
  fontSize: '3vh'

}

const input = {
  minWidth: '30vw',
  maxWidth: '80vw',
  marginBottom: '2vh',
  border: '3px darkgray solid',
  borderRadius: '3px'
}



const form = {
  display: 'flex',
  flexDirection: 'column'
}




module.exports = {
  login,
  input,
  form,
  welcome,
  title,
  phrase
};