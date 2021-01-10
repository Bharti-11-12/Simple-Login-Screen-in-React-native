import React,{Component} from 'react';
import {StyleSheet,Text,TextInput,Image,View,TouchableHighlight,ImageBackground, TouchableOpacity} from 'react-native';

export default class welcome extends Component{

  constructor(props) {
    super(props);
   this.state = {
      email   : '',
      password: '',
    }
    
  }

  validate_field=()=>{
    const{email,password}=this.state;
  if(email=='')
  {
    alert("Please Fill Email");
    return false;
  }
  else if(password=='')
  {
    alert("Please Fill Password"); 
    return false;
  }
  return true;
}


Run=()=>{
  if(this.validate_field())
  {
    if(this.state.email=="Bhartisingh" && this.state.password=="123456")
    {
      
      alert("Succesfull Login");
      this.A.clear();
      this.B.clear();
    }
    else{
      
      alert("**Email Id Or Password Is Incorrect**");
      this.A.clear();
      this.B.clear();
    }
   
  }
}

fotgetpass=()=>
{
  if(true)
  {alert("working")}
}


  onClickListener=(ViewId)=>{
    alert("Button Pressed"+" "+ViewId);
  }

  render()
  {
    return(
      <ImageBackground style={{flex:1}} source={{uri:'https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg'}}>
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'http://www.familytree.com/wp-content/uploads/2017/05/email-logo.png'}}/>
        <TextInput ref={i1=>{this.A=i1}} style={styles.inputs}
            placeholder="abc@example.com" 
            underlineColorAndroid="transparent"
           onChangeText={(value) => this.setState({email:value})}/>
      </View>
      <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://tse3.mm.bing.net/th?id=OIP.tQVOEsEX_gewodKqORgqaQHaGC&pid=Api&P=0&w=190&h=156'}}/>
          <TextInput  ref={i2=>{this.B=i2}} style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
             
    onChangeText={(value) => this.setState({password:value})}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.Run()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableHighlight style={styles.buttonContainer}onPress={()=>this.props.navigation.navigate("Password")}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate("register")}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
      </ImageBackground>
 
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
  
});
