import React, { useEffect, useState } from "react";
import {
    WrapperContentPopup,
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTextHeader,
  WrapperTextHeaderSmall
} from "./style";
import { Badge, Col, Popover } from "antd";
import * as UserService from '../../services/UserService'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from '../../redux/slides/userSlide'
import Loading from "../LoadingComponent/Loading";
import { searchProduct } from "../../redux/slides/productSlide";

const HeaderComponent = ({isHiddenSearch = false, isHiddenCart = false}) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [search, setSearch] = useState('')
  const order = useSelector((state) => state.order)
  const [isPending, setLoading] = useState(false)
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };

  const handleLogout = async() => {
    setLoading(true)
    await UserService.logoutUser()
    dispatch(resetUser())
    setLoading(false)
  }

  useEffect(() =>{
    setLoading(true)
    setUserName(user?.name)
    setUserAvatar(user?.avatar)
    setLoading(false)
  }, [user?.name, user?.avatar])

  const content = (
    <div>
      <WrapperContentPopup onClick={() => navigate('/profile-user')}>Thông tin người dùng</WrapperContentPopup>
      {user?.isAdmin &&(
        
        <WrapperContentPopup onClick={() => navigate('/system/admin')}>Quản lý hệ thống</WrapperContentPopup>
        )}
        <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
    
    </div>
  );

  const onSearch = (e) => {
    setSearch(e.target.value)
    dispatch(searchProduct(e.target.value))
  }

  return (
    <div
      style={{
        width: "100%",
        background: "#b1c23c",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WrapperHeader style={{justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset'}}>
        <Col span={6}>
          <WrapperTextHeader>FreshCake</WrapperTextHeader>
        </Col>
        {!isHiddenSearch && (
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            textButton="Tìm kiếm"
            placeholder="Nhập sản phẩm cần tìm"
            onChange={onSearch}
          />
        </Col>

        )}
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
        <Loading isPending={isPending}>
          <WrapperHeaderAccount>
            {userAvatar ? (
                <img src={userAvatar} alt="avatar" style={{
                    height: '50px',
                    width: '50px',
                    borderRadius: "50%",
                    objectFit: 'cover'
                }}/>
            ):(
                <UserOutlined style={{ fontSize: "30px" }} />

            )}
            {user?.access_token ? (
              <>
                <Popover content={content} trigger="click">
                <div style={{ cursor: "pointer" }}>{userName?.length ? user?.name : user?.email}</div>
                </Popover>
              </>
            ) : (
              <div onClick={handleNavigateLogin} style={{ cursor: "pointer" }}>
                <WrapperTextHeaderSmall>
                  Đăng nhập/Đăng ký
                </WrapperTextHeaderSmall>
                <div>
                  <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                  <CaretDownOutlined />
                </div>
              </div>
            )}
          </WrapperHeaderAccount>
        </Loading>
        {!isHiddenCart && (
          <div onClick={() => navigate('/order')} style={{cursor: 'pointer'}}>
            <Badge count={order?.orderItems?.length} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>

        )}
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
