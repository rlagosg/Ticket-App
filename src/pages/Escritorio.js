import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { useContext, useState } from 'react'
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { Navigate, useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

export const Escritorio = () => {

  const navigate = useNavigate();

  const salir = () => {
    localStorage.clear();
    navigate('/login');
  }

  const { socket } = useContext( SocketContext );
  const [ticket, setTicket] = useState(null);

  useHideMenu(false);

  const [usuario] = useState(getUsuarioStorage());
  if(!usuario.agente || !usuario.escritorio){
    return <Navigate to="/login" />;
  }

  const siguiente = () => {
    socket.emit('siguiente', usuario, ( ticket ) => { 
      setTicket( ticket );
    });
  }

  return (
    <>
      <Row>
        <Col span={ 20 }>
            <Title level={2}>{usuario.agente}</Title>
            <Text>Usted esta trabajando en el escritorio: </Text>
            <Text type='success'>{usuario.escritorio}</Text>
        </Col>
        <Col>
          <Button
            shape='round'
            type='danger'
            onClick={ salir }
          >
            <CloseCircleOutlined/>
            Salir
          </Button>
        </Col>
      </Row>

      <Divider/>

      {
        ticket && (
          <Row>
            <Col>
              <Text>Esta atendiendo el ticket numero: </Text>
              <Text 
                style={{fontSize: 30}}
                type='danger'
              >
                { ticket.numero }
              </Text>
            </Col>
          </Row>
        )
      }

      <Row>
        <Col offset={18} span={6} align="right">
          <Button
              shape='round'
              type='primary'
              onClick={ siguiente }
            >        
              <RightOutlined/>      
              Siguiente
          </Button>
        </Col>
      </Row>

    </>
  )
}
