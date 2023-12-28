import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavbarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (<WrapperTextValue>{option}</WrapperTextValue>)
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                        <Checkbox value="B">B</Checkbox>
                    </Checkbox.Group>
                )
            case 'star':
                return (
                    options.map((option) => {
                        console.log('check', option)
                        return (
                            <div style={{ display: 'flex', gap: '4px' }}>
                                <Rate style={{ fontSize: '14px' }} disabled defaultValue={option} />
                                <span> {`Từ ${option} sao`}</span>
                            </div>
                        )
                    })
                )
            case 'price':
                return (
                    options.map((option) => {
                        return (
                            <WrapperTextPrice>
                                {option}
                            </WrapperTextPrice>
                        )
                    })
                )
            default:
                return {}
        }
    }
    return (
        <div>
            <WrapperLabelText>Label</WrapperLabelText>
            <WrapperContent>
                {renderContent('text', ['Bánh sinh nhật', 'Bánh kem noel', 'Bánh cho trẻ em'])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' },
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', [3, 4, 5])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('price', ['Dưới 50k', 'Trên 500k'])}
            </WrapperContent>
        </div>
    )
}

export default NavbarComponent