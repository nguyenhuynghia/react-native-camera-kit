import { Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window')

export default styleObject = {
  cameraContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height
  },
  // bottomButtons: {
  //     flex: 2,
  //     backgroundColor: 'transparent',
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     padding: 10
  // },
  bottomButtons: {
    height: 100,
    backgroundColor: 'red',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    backgroundColor: '#F7F7F7'
  },
  gap: {
    flex: 10,
    flexDirection: 'column'
  },
}
