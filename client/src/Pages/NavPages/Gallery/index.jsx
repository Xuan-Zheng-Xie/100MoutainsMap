import React,{ Component } from 'react';
import PhotoCard from '../../../Components/PhotoCard/index'
import './index.gallery.css'



export default class Gallery extends Component{
    
    render(){
        const data = [['合歡主峰','合歡北峰','石門山'],['合歡東峰','奇萊南峰','南華山'],['向陽山','三叉山','羊頭山'],['雪山主峰','雪山東峰','秀姑巒山'],['北大武山','鹿山','奇萊主峰'],['畢祿山','庫拉諾辛山','關山'],['塔關山','關山嶺山','品田山'],['池有山','頭鷹山','新康山'],['火石山','太魯閣大山','郡大山'],['干卓萬山','玉山主峰','玉山南峰'],['桃山','白姑大山']]

        return(
            
            <div>
                <div style={{height:60}}>
                    
                </div>
                <div className='wrap-component-gallery-content'>
                    <table>
                        {
                            data.map(
                                function(item, key){
                                    if(item.length===3){
                                        return(
                                            <tr key={key}>
                                                <td><PhotoCard place_name={item[0]}/></td>
                                                <td><PhotoCard place_name={item[1]}/></td>
                                                <td><PhotoCard place_name={item[2]}/></td>
                                            </tr>
                                        )
                                    }
                                    if(item.length===2){
                                        return(
                                            <tr key={key}>
                                                <td><PhotoCard place_name={item[0]}/></td>
                                                <td><PhotoCard place_name={item[1]}/></td>
                                            </tr>
                                        )
                                    }
                                    return(
                                        <tr key={key}>
                                            <td><PhotoCard place_name={item[0]}/></td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </table>
                    
                    
                </div>
                
            </div>
            
        )
    }
}

