import React,{ Component, createRef } from 'react';
import ReactMapGL,{ Marker } from 'react-map-gl'
import { FaMountain } from 'react-icons/fa'
import './index.map.css'
import "mapbox-gl/dist/mapbox-gl.css";


export default class Taiwainmap extends Component{
    constructor(props){
        super(props)
        this.state = {
            longitude: 121.03248,
            latitude: 23.51717,
            zoom: 6.5,
        }
    }

    mountainIconRef = createRef([])

    render(){
        const {longitude,latitude,zoom} = this.state
        const data = [
                {'place_name': '玉山', 'latitude': 23.470002, 'longitude': 120.957274, 'height': 3952.0}, {'place_name': '雪山', 'latitude': 24.383401, 'longitude': 121.231754, 'height': 3886.0}, {'place_name': '玉山東峰', 'latitude': 23.470775, 'longitude': 120.965668, 'height': 3869.0}, {'place_name': '玉山北峰', 'latitude': 23.487452, 'longitude': 120.959672, 'height': 3858.0}, {'place_name': '玉山南峰', 'latitude': 23.446581, 'longitude': 120.958784, 'height': 3844.0}, {'place_name': '秀姑巒山', 'latitude': 23.496791, 'longitude': 121.05744, 'height': 3805.0}, {'place_name': '馬博拉斯山', 'latitude': 23.52034, 'longitude': 121.067236, 'height': 3785.0}, {'place_name': '南湖大山', 'latitude': 24.361805, 'longitude': 121.439359, 'height': 3742.0},
                {'place_name': '東小南山', 'latitude': 23.439036, 'longitude': 120.963411, 'height': 3711.0}, {'place_name': '中央尖山', 'latitude': 24.310226, 'longitude': 121.416203, 'height': 3705.0},
                {'place_name': '雪山北峰', 'latitude': 24.414724, 'longitude': 121.240396, 'height': 3703.0}, {'place_name': '關山', 'latitude': 23.228086, 'longitude': 120.911717, 'height': 3668.0}, {'place_name': '大水窟山', 'latitude': 24.365894, 'longitude': 121.450661, 'height': 3642.0}, {'place_name': '南湖大山東峰', 'latitude': 23.473853, 'longitude': 121.038618, 'height': 3632.0}, {'place_name': '東郡大山', 'latitude': 23.626735, 'longitude': 121.092082, 'height': 3619.0}, {'place_name': '奇萊北峰', 'latitude': 24.118339, 'longitude': 121.334539, 'height': 3607.0}, {'place_name': '向陽山', 'latitude': 23.284291, 'longitude': 120.992423, 'height': 3603.0}, {'place_name': '大劍山', 'latitude': 24.340941, 'longitude': 121.200492, 'height': 3594.0},
                {'place_name': '雲峰', 'latitude': 23.353743, 'longitude': 120.975757, 'height': 3564.0}, {'place_name': '奇萊主山', 'latitude': 24.085997, 'longitude': 121.323234, 'height': 3560.0},
                {'place_name': '馬利加南山', 'latitude': 23.521592, 'longitude': 121.117171, 'height': 3546.0},
                {'place_name': '南湖北山', 'latitude': 24.383669, 'longitude': 121.437171, 'height': 3536.0},
                {'place_name': '大雪山', 'latitude': 24.330751, 'longitude': 121.121182, 'height': 3530.0},
                {'place_name': '品田山', 'latitude': 24.428214, 'longitude': 121.266816, 'height': 3524.0}, 
                {'place_name': '玉山西峰', 'latitude': 23.472426, 'longitude': 120.934205, 'height': 3518.0}, 
                {'place_name': '頭鷹山', 'latitude': 24.359607, 'longitude': 121.140723, 'height': 3510.0}, 
                {'place_name': '三叉山', 'latitude': 23.297183, 'longitude': 121.028671, 'height': 3496.0}, {'place_name': '大霸尖山', 'latitude': 24.457743, 'longitude': 121.258031, 'height': 3492.0}, {'place_name': '南湖大山南峰', 'latitude': 24.347784, 'longitude': 121.434582, 'height': 3475.0}, {'place_name': '東巒大山', 'latitude': 23.648667, 'longitude': 121.081564, 'height': 3468.0},
                {'place_name': '無明山', 'latitude': 24.255559, 'longitude': 121.384663, 'height': 3451.0}, {'place_name': '巴巴山', 'latitude': 24.342411, 'longitude': 121.43782, 'height': 3449.0},
                {'place_name': '馬西山', 'latitude': 23.483755, 'longitude': 121.173967, 'height': 3443.0}, {'place_name': '北合歡山', 'latitude': 24.181496, 'longitude': 121.281587, 'height': 3422.0}, {'place_name': '合歡山東峰', 'latitude': 24.135671, 'longitude': 121.281033, 'height': 3421.0}, {'place_name': '小霸尖山', 'latitude': 24.45557, 'longitude': 121.252049, 'height': 3418.0}, {'place_name': '合歡山', 'latitude': 24.142632, 'longitude': 121.271166, 'height': 3417.0}, {'place_name': '南玉山', 'latitude': 23.429276, 'longitude': 120.92491, 'height': 3383.0}, {'place_name': '畢祿山', 'latitude': 24.213579, 'longitude': 121.347162, 'height': 3371.0}, {'place_name': '卓社大山', 'latitude': 23.834571, 'longitude': 121.115822, 'height': 3369.0}, {'place_name': '奇萊南峰', 'latitude': 24.061219, 'longitude': 121.279809, 'height': 3358.0}, {'place_name': '南雙頭山', 'latitude': 23.346062, 'longitude': 121.010532, 'height': 3356.0}, {'place_name': '能高山南峰', 'latitude': 23.965374, 'longitude': 121.278083, 'height': 3349.0}, {'place_name': '志佳陽大山', 'latitude': 24.202683, 'longitude': 121.108962, 'height': 3345.0}, {'place_name': '白姑大山', 'latitude': 23.490196, 'longitude': 121.009592, 'height': 3341.0}, {'place_name': '八通關山', 'latitude': 23.316418, 'longitude': 121.127384, 'height': 3335.0},
                {'place_name': '新康山', 'latitude': 23.600421, 'longitude': 121.213543, 'height': 3331.0}, {'place_name': '丹大山', 'latitude': 24.432621, 'longitude': 121.304898, 'height': 3325.0}, {'place_name': '桃山', 'latitude': 24.306633, 'longitude': 121.187996, 'height': 3325.0}, {'place_name': '佳陽山', 'latitude': 24.381922, 'longitude': 121.175055, 'height': 3314.0}, {'place_name': '火石山', 'latitude': 24.431102, 'longitude': 121.28814, 'height': 3310.0}, {'place_name': '池有山', 'latitude': 24.469989, 'longitude': 121.243603, 'height': 3303.0}, {'place_name': '伊澤山', 'latitude': 23.051181, 'longitude': 120.874204, 'height': 3297.0},
                {'place_name': '卑南主山', 'latitude': 23.577365, 'longitude': 120.962368, 'height': 3295.0}, {'place_name': '干卓萬山', 'latitude': 24.357779, 'longitude': 121.251324, 'height': 3284.0}, {'place_name': '太魯閣大山', 'latitude': 23.876045, 'longitude': 121.138989, 'height': 3283.0}, {'place_name': '轆轆山', 'latitude': 24.079077, 'longitude': 121.420976, 'height': 3279.0}, {'place_name': '喀西帕南山', 'latitude': 23.391362, 'longitude': 120.99808, 'height': 3276.0}, {'place_name': '內嶺爾山', 'latitude': 23.468634, 'longitude': 121.195221, 'height': 3275.0}, {'place_name': '鈴鳴山', 'latitude': 23.579269, 'longitude': 121.19605, 'height': 3272.0},
                {'place_name': '郡大山', 'latitude': 24.24438, 'longitude': 121.351647, 'height': 3265.0}, {'place_name': '能高山', 'latitude': 23.992334, 'longitude': 121.260253, 'height': 3262.0}, {'place_name': '萬東山西峰', 'latitude': 23.851873, 'longitude': 121.185522, 'height': 3258.0}, {'place_name': '劍山', 'latitude': 24.295572, 'longitude': 121.170202, 'height': 3253.0}, {'place_name': '屏風山', 'latitude': 24.149275, 'longitude': 121.342934, 'height': 3250.0}, {'place_name': '小關山', 'latitude': 23.151654, 'longitude': 120.87612, 'height': 3249.0}, {'place_name': '義西請馬至山', 'latitude': 23.58646, 'longitude': 121.153265, 'height': 3245.0},
                {'place_name': '牧山', 'latitude': 23.862896, 'longitude': 121.160214, 'height': 3241.0}, {'place_name': '玉山前峰', 'latitude': 23.475605, 'longitude': 120.917662, 'height': 3239.0}, {'place_name': '石門山', 'latitude': 24.152435, 'longitude': 121.284587, 'height': 3237.0}, {'place_name': '無雙山', 'latitude': 23.59157, 'longitude': 121.05432, 'height': 3231.0}, {'place_name': '塔關山', 'latitude': 23.251966, 'longitude': 120.94222, 'height': 3222.0}, {'place_name': '馬比杉山', 'latitude': 24.348325, 'longitude': 121.485633, 'height': 3211.0}, {'place_name': '達芬尖山', 'latitude': 23.43296, 'longitude': 121.01322, 'height': 3208.0}, {'place_name': '雪山東峰', 'latitude': 24.388687, 'longitude': 121.272073, 'height': 3201.0}, {'place_name': '南華山', 'latitude': 24.039337, 'longitude': 121.285918, 'height': 3184.0},
                {'place_name': '關山嶺山', 'latitude': 23.270996, 'longitude': 120.959457, 'height': 3176.0}, {'place_name': '海諾南山', 'latitude': 23.185598, 'longitude': 120.911328, 'height': 3174.0}, {'place_name': '中雪山', 'latitude': 24.336476, 'longitude': 121.078059, 'height': 3173.0}, {'place_name': '閂山', 'latitude': 24.258708, 'longitude': 121.309867, 'height': 3168.0}, {'place_name': '甘薯峰', 'latitude': 24.290393, 'longitude': 121.389819, 'height': 3158.0}, {'place_name': '西合歡山', 'latitude': 24.17761, 'longitude': 121.244525, 'height': 3145.0}, {'place_name': '審馬陣山', 'latitude': 24.380209, 'longitude': 121.417448, 'height': 3141.0}, {'place_name': '喀拉業山', 'latitude': 24.44996, 'longitude': 121.321288, 'height': 3133.0}, {'place_name': '庫哈諾辛山', 'latitude': 23.262774, 'longitude': 120.900042, 'height': 3115.0}, {'place_name': '加利山', 'latitude': 24.4595, 'longitude': 121.216197, 'height': 3112.0}, {'place_name': '白石山', 'latitude': 23.907542, 'longitude': 121.274785, 'height': 3110.0}, {'place_name': '磐石山', 'latitude': 24.104728, 'longitude': 121.388298, 'height': 3106.0}, {'place_name': '帕托魯山', 'latitude': 24.099441, 'longitude': 121.466602, 'height': 3101.0}, {'place_name': '北大武山', 'latitude': 22.627075, 'longitude': 120.76141, 'height': 3092.0}, {'place_name': '西巒大山', 'latitude': 23.694019, 'longitude': 120.947166, 'height': 3081.0}, {'place_name': '塔芬山', 'latitude': 23.406038, 'longitude': 121.026793, 'height': 3070.0}, {'place_name': '立霧主山', 'latitude': 24.124914, 'longitude': 121.445703, 'height': 3069.0},
                {'place_name': '安東軍山', 'latitude': 23.872712, 'longitude': 121.266118, 'height': 3068.0}, {'place_name': '光頭山', 'latitude': 23.937997, 'longitude': 121.271952, 'height': 3060.0}, {'place_name': '羊頭山', 'latitude': 24.208264, 'longitude': 121.379765, 'height': 3035.0}, {'place_name': '布拉克桑山', 'latitude': 23.548389, 'longitude': 121.032528, 'height': 3026.0}, {'place_name': '駒盆山', 'latitude': 23.232838, 'longitude': 121.0787, 'height': 3022.0}, {'place_name': '六順山', 'latitude': 23.724508, 'longitude': 121.239549, 'height': 2999.0}, {'place_name': '鹿山', 'latitude': 23.45065, 'longitude': 120.988479, 'height': 2981.0}
            ]


        return (
            <div className='wrap-component-taiwain-map'>
                <ReactMapGL
                    mapboxAccessToken='pk.eyJ1IjoieHVhaW56aGVuZy14aWUiLCJhIjoiY2xkajIwZTJnMHQ5ZTN2czJ4Z2ZydTMxOSJ9.HMM3F7l9BsAPCZ4v6sI4DA'
                    initialViewState={{
                        longitude: longitude,
                        latitude: latitude,
                        zoom: zoom
                    }}
                    mapStyle="mapbox://styles/xuainzheng-xie/cldxc0khg000201l9as4sjmay"
                    onZoom={e => { 
                            this.setState({zoom: e.viewState.zoom})
                        }
                    }
                    >
                    {data.map(
                        function(item,key) {
                            return(
                                <Marker key={key} longitude={item.longitude} latitude={item.latitude}>
                                    <div  className='wrap-mountain-content'>
                                        <button className={zoom<6 ?  "hide":"btn-mountain-content"}    >
                                            <FaMountain/>
                                        </button>
                                        <h5 className={zoom<8.6 ? 'hide':"view"}>{item.place_name}  {item.height}</h5>
                                    </div>
                                </Marker>
                            )   
                        }
                    )}
                </ReactMapGL>
            </div>
        )
    }
}