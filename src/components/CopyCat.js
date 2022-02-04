import React from 'react';
import styles from '../styles'
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    const input = this.props.input;
    const onChange = this.props.onChange;
    const copyCatName = this.props.copyCatName;
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>{copyCatName||'Tom'}</h1>
        <input type='text' value={input} onChange={onChange}/>
        <img style={styles.imgStyles}
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>{copying && input}</p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.bool.isRequired,
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  copyCatName: PropTypes.string
};