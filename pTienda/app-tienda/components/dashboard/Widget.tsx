import { AccountBalanceWalletOutlined, MonetizationOnOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

export const Widget = ({ type }) => {
    
  let data;

  //temporary
  const amount = 100
  const diff = 20


    switch(type){
        case "user":
            data={
                title: "USUARIOS",
                isMoney: false,
                link: "Ver usuarios",
                icon: <PersonOutlinedIcon 
                    className='iconw' 
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)"
                    }}
                />,
            };
            break;
            case "order":
            data={
                title: "PEDIDOS",
                isMoney: false,
                link: "Ver pedidos",
                icon: <ShoppingCartOutlined 
                    className='iconw'
                    style={{
                        color: "goldenrod",
                        backgroundColor: "rgba(218, 165, 32, 0.2)"
                    }}
                />,
            };
            break;
            case "earning":
            data={
                title: "GANANCIAS",
                isMoney: true,
                link: "Ver ganancias",
                icon: <MonetizationOnOutlined 
                    className='iconw'
                    style={{
                        color: "green",
                        backgroundColor: "rgba(0, 128, 0, 0.2)"
                    }}
                />,
            };
            break;
            case "balance":
            data={
                title: "SALDO",
                isMoney: true,
                link: "Ver detalles",
                icon: <AccountBalanceWalletOutlined 
                    className='iconw'
                    style={{
                        color: "purple",
                        backgroundColor: "rgba(128, 0, 128, 0.2)"
                    }}
                />,
            };
            break;
        default: 
            break;
    }



  return (
    <div className="widget">
        <div className="left">
            <span className="titlew">{data?.title}</span>
            <span className="counterw">
                {data?.isMoney && "€"} {amount}
            </span>
            <span className="link">{data?.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {diff}%
            </div>
            {data?.icon}
        </div>
    </div>
  )
}