import pandas as pd

dict_from_csv = pd.read_csv('data.csv', encoding='big5').to_dict()
lis = []
for i in range(100):
    lis.append(
        
            {
                'place_name':list(dict(dict_from_csv['名']).values())[i],
                'latitude':list(dict(dict_from_csv['資料一']).values())[i],
                'longtitude':list(dict(dict_from_csv['資料二']).values())[i],
                'height':list(dict(dict_from_csv['資料三']).values())[i]
            }
        
    )


print(lis)