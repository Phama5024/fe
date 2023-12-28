import styled from "styled-components";
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

export const WrapperTypeProduct = styled.div`
    display : flex;
    align-items : center;
    gap : 24px;
    justify-content : flex-start;
    height: 44px;
`
export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover{
        color: #fff;
        background: #b1c23c;
        span{
            color: #fff;
        }
    }
    width: 100%;
    text-align: center;
`
export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
`