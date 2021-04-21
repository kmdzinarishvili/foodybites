import React from 'react';
import {View,  StyleSheet, Image} from 'react-native';
import {h, w} from '../../proportion';
import ImageViewer from 'react-native-image-zoom-viewer';




const REG_CIRCLE_WIDTH =17.02*w;
const SEL_CIRCLE_WIDTH =29*w;
const CIRCLE_MARGIN =4.5*w;


const PhotoNav = ({route}) =>{
    const index = route.params.index;
   const food = route.params.food;
   return ( < ImageViewer 
                imageUrls={food}
                index={index}
                renderImage={(props)=> <Image style={{width:100, height:100}} {...props} />}
                renderIndicator={() => {return} }
                backgroundColor={'#25262E'}
                renderFooter={(active) => 
                <View style={styles.container
                
                }>
                        {food.map((foo,index)=>
                        <View key={`${index}`}style={index===active?styles.selCircle:styles.regCircle}/>)}
                    </View>}
                />
 )

}




const styles = StyleSheet.create({
    container:    {
        width:1125*w,
         alignItems:'center',
          flexDirection:'row', 
    justifyContent:'center', 
    paddingBottom:'5%'
},
    regCircle:{
        backgroundColor:'#6A6A6A',
        margin:CIRCLE_MARGIN,
        width: REG_CIRCLE_WIDTH,
        height:REG_CIRCLE_WIDTH,
        borderRadius:REG_CIRCLE_WIDTH/2,
    },
    selCircle:{
        backgroundColor:'#5663FF',
        width:SEL_CIRCLE_WIDTH,
        height:SEL_CIRCLE_WIDTH,
        borderRadius:SEL_CIRCLE_WIDTH/2,
        margin:CIRCLE_MARGIN,
        borderColor:'#FFF',
        borderWidth:1*w

    }
})

export default PhotoNav;