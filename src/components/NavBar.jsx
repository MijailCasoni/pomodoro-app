import React from 'react';
import { FaUser, FaChartBar, FaBell, FaCog } from 'react-icons/fa';
import {Link} from 'react-router-dom';

function NavBar({user}) {
    return (

            <nav style={styles.navbar}>
      <div style={styles.userInfo}>
        <img 
          src={user.avatarUrl || 'default-avatar.png'} 
          alt="User Avatar" 
          style={styles.avatar} 
        />
        <span style={styles.userName}>{user.name}</span>
      </div>
      <div style={styles.links}>
        <Link to="/account" style={styles.link}>
          <FaUser style={styles.icon} />
          Cuenta
        </Link>
        <Link to="/statistics" style={styles.link}>
          <FaChartBar style={styles.icon} />
          Estadística
        </Link>
        <Link to="/notifications" style={styles.link}>
          <FaBell style={styles.icon} />
          Notificaciones
        </Link>
        <Link to="/settings" style={styles.link}>
          <FaCog style={styles.icon} />
          Configuraciones
        </Link>
      </div>
    </nav>
    );
}


const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#282c34',
      color: 'white',
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    userName: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    links: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      textDecoration: 'none',
      fontSize: '16px',
    },
    icon: {
      marginRight: '8px',
    }
  };
export default NavBar;