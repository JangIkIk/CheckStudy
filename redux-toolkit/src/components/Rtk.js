import {useFetchBreedsQuery} from '../slice/api-reducer'

export const Rtk = ()=>{
    const { data = [], isFetching } = useFetchBreedsQuery();

    return(
        <div>
            {data.map((el)=>{
                return(
                    <div key={el.menuId}>{el.menuTitle}</div>
                );
            })}
        </div>
    );
}