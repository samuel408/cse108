import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

const Calculator = () => {
  const [output, setOutput] = useState('');
  const [operand, setOperand] = useState('');
  const [operator, setOperator] = useState('');
  //grabs last number in the command and stores it as previous for example if we do 2*6, 6 will be stored as previous
  const [final, setfinal] = useState('');


  const handleNumberClick = (num) => {
    setOutput(output + num);
  };

  const handleDecimalClick = () => {
    if (!output.includes('.')) {
      setOutput(output + '.');
    }
  };

  const handleOperatorClick = (op) => {
    setOperand(output);
    setOperator(op);
    setOutput('');
  };
  const handleEqualsClick = () => {
    let result;
    //set previous to the last number in the command and not the result
    switch (operator) {
      case '+':
        if (final !== '') {       
            result = parseFloat(output) + parseFloat(final);
            } else {
                result = parseFloat(operand) + parseFloat(output);
            }
        
        break;
      case '-':
        if (final !== '') {       
            result = parseFloat(output) - parseFloat(final);
            } else {
                result = parseFloat(operand) - parseFloat(output);
            }        break;
      case '*':
        //if theres a previous result, multiply it by the current multiplier for example if i have 2*6 previous result is 12, then i want to multiply 12 by 6
        if (final === '') {       
            result = parseFloat(operand) * parseFloat(output);

            } else {

                result = parseFloat(output) * parseFloat(final);

            }
            
        break;
      case '/':
        if (final !== '') {       
            result = parseFloat(output) / parseFloat(final);
            } else {
                result = parseFloat(operand) / parseFloat(output);
            }        break;
      default:
        result = '';
    }
   

    setOutput(result.toString());
    // Keep the operand unchanged
    setOperand(result.toString());
    // Do not reset the operator, so that the previous operator can be reused
    setfinal(result.toString());

  };

  const handleClearClick = () => {
    setOutput('');
    setOperand('');
    setOperator('');
    setfinal('');
  };

  const styles = {
    body: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: 0,
      backgroundColor: '#f0f0f0',
    },
    calculator: {
      border: '2px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#fff',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '300px',
      textAlign: 'center',
    },
    output: {
      fontSize: '36px',
      padding: '10px',
      marginBottom: '20px',
      textAlign: 'right',
      width: '100%',
      boxSizing: 'border-box',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      fontSize: '24px',
      padding: '20px',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#ccc',
      border: 'none',
      outline: 'none',
      transition: 'background-color 0.3s ease',
      width: '100%',
      marginBottom: '10px',
    },
    operator: {
      backgroundColor: '#ff9500',
      color: '#fff',
    },
    equals: {
      backgroundColor: '#ff9500',
      color: '#fff',
    },
    clear: {
      backgroundColor: '#ff3b30',
      color: '#fff',
    },
    decimal: {
      backgroundColor: '#d1d1d1',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.calculator}>
        <TextField
          id="outlined-basic"
          label="Output"
          variant="outlined"
          fullWidth
          value={output}
          disabled
          style={styles.output}
        />
        <Grid container spacing={1}>
          {[1,2,3,4,5,6,7,8,9,0].map((num) => (
            <Grid item xs={3} key={num}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => handleNumberClick(num)}
                style={styles.button}
              >
                {num}
              </Button>
            </Grid>
          ))}
          <Grid item xs={3}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={handleDecimalClick}
              style={{ ...styles.button, ...styles.decimal }}
            >
              .
            </Button>
          </Grid>
          {['+', '-', '*', '/'].map((op) => (
            <Grid item xs={3} key={op}>
              <Button
                type="button"
                variant="contained"
                color={operator === op ? 'secondary' : 'default'}
                onClick={() => handleOperatorClick(op)}
                style={{ ...styles.button, ...(operator === op ? styles.operator : {}) }}
              >
                {op}
              </Button>
            </Grid>
          ))}
          <Grid item xs={3}>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEqualsClick}
              style={{ ...styles.button, ...styles.equals }}
            >
              =
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              type="button"
              variant="contained"
              color="default"
              onClick={handleClearClick}
              style={{ ...styles.button, ...styles.clear }}
            >
              C
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Calculator;
