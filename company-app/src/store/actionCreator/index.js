import {
    LOADING_USER,
    ERROR_USER,
    USER_LOGIN_SUCCESS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTSID_SUCCESS,
    PRODUCTID_DELETE_SUCCESS,
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANIESID_SUCCESS,
    COMPANIESID_DELETE_SUCCESS,
    FETCH_TRANSACTIONS_SUCCESS,
    FETCH_TRANSACTIONSID_SUCCESS,
    TRANSACTIONSID_DELETE_SUCCESS,
    FETCH_REPORTS_SUCCESS,
    LOADING_PRODUCTS,
    ERROR_PRODUCTS
} from '../actionTypes'
const baseUrl = 'https://company-transaction-server.herokuapp.com';




// =========================== LOADING & ERROR USER ===========================

export const loadingUser = (payload) => {
    return {
      type: LOADING_USER,
      payload,
    };
  };
  
  export const errorUser = (payload) => {
    return {
      type: ERROR_USER,
      payload,
    };
  };
  
  // =========================== REGISTER NEW USER (ADMIN) ===========================
  
  export const setRegister = (payload) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(loadingUser(true));
        dispatch(errorUser(null));
        fetch(`${baseUrl}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.getItem('access_token'),
          },
          body: JSON.stringify(payload),
        })
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              // console.log(data.statusText);
              throw new Error(data.statusText);
            }
          })
          .then((data) => {
            // console.log(data, '<<<<<<<<<<<<<<<<<<<<<< INI DATA SETELAH REGISTER');
  
            if (!data.message) {
              resolve();
            }
            // console.log('OK ADD NEW PRODUCT');
          })
          .catch((err) => {
            dispatch(errorUser(err));
            reject(err);
          })
          .finally(() => {
            dispatch(loadingUser(false));
          });
      });
    };
  };
  
  // =========================== LOGIN USER (ADMIN) ===========================
  
  export const afterLoginSuccess = () => {
    return {
      type: USER_LOGIN_SUCCESS,
    };
  };
  
  export const setLogin = (payload) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(loadingUser(true));
        dispatch(errorUser(null));
        fetch(`${baseUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              // console.log(data.statusText);
              throw new Error(data.statusText);
            }
          })
          .then((data) => {
            // console.log(data.access_token);
            // console.log('SUCCESS LOGIN');
  
            if (data.access_token) {
              localStorage.setItem('access_token', data.access_token);
              resolve();
            }
          })
          .catch((err) => {
            dispatch(errorUser(err));
            reject(err);
          })
          .finally(() => {
            dispatch(loadingUser(false));
          });
      });
    };
  };


   // =========================== PRODUCTS ===========================

   export const loadingProducts = (payload) => {
    return {
      type: LOADING_PRODUCTS,
      payload,
    };
  };
  
  export const errorProducts = (payload) => {
    return {
      type: ERROR_PRODUCTS,
      payload,
    };
  };
  
  // =========================== FETCHING PRODUCTS ===========================
  
  export const setProducts = (payload) => {
    return {
      type: FETCH_PRODUCTS_SUCCESS,
      payload,
    };
  };
  
  export const fetchProducts = (payload) => {
    return (dispatch, getState) => {
      dispatch(loadingProducts(true));
      dispatch(errorProducts(null));
      fetch(`${baseUrl}/item`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          // console.log(data);
          dispatch(setProducts(data));
        })
        .catch((err) => {
          dispatch(errorProducts(err));
        })
        .finally(() => {
          dispatch(loadingProducts(false));
        });
    };
  };

  export const addProducts = (payload) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(loadingUser(true));
        dispatch(errorUser(null));
        fetch(`${baseUrl}/item`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.getItem('access_token'),
          },
          body: JSON.stringify(payload),
        })
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              // console.log(data.statusText);
              throw new Error(data.statusText);
            }
          })
          .then((data) => {
            // console.log(data, '<<<<<<<<<<<<<<<<<<<<<< INI DATA SETELAH REGISTER');
  
            if (!data.message) {
              resolve();
            }
            // console.log('OK ADD NEW PRODUCT');
          })
          .catch((err) => {
            dispatch(errorProducts(err));
            reject(err);
          })
          .finally(() => {
            dispatch(loadingProducts(false));
          });
      });
    };
  };
  export const productDeleteSucces = (payload) => {
    return {type : PRODUCTID_DELETE_SUCCESS, payload}
}

export const productIdSucces = (payload) => {
  return {type : FETCH_PRODUCTSID_SUCCESS, payload}
}

export const fetchProductId = (id) => {
  return (dispatch,getState) => {
    dispatch(loadingProducts(true));
    dispatch(errorProducts(null));
      fetch(`${baseUrl}/item/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        // console.log(data);
        dispatch(productIdSucces(data));
      })
      .catch((err) => {
        dispatch(errorProducts(err));
      })
      .finally(() => {
        dispatch(loadingProducts(false));
      });
      
  }
}

   // =========================== FETCHING COMPANIES===========================
 
   export const setCompanies = (payload) => {
    return {
      type: FETCH_COMPANIES_SUCCESS,
      payload,
    };
  };
  
  export const fetchCompanies = (payload) => {
    return (dispatch, getState) => {
      dispatch(loadingProducts(true));
      dispatch(errorProducts(null));
      fetch(`${baseUrl}/company`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          // console.log(data);
          dispatch(setCompanies(data));
        })
        .catch((err) => {
          dispatch(errorProducts(err));
        })
        .finally(() => {
          dispatch(loadingProducts(false));
        });
    };
  };

  export const addCompanies = (payload) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(loadingUser(true));
        dispatch(errorUser(null));
        fetch(`${baseUrl}/company`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.getItem('access_token'),
          },
          body: JSON.stringify(payload),
        })
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              // console.log(data.statusText);
              throw new Error(data.statusText);
            }
          })
          .then((data) => {
            // console.log(data, '<<<<<<<<<<<<<<<<<<<<<< INI DATA SETELAH REGISTER');
  
            if (!data.message) {
              resolve();
            }
            // console.log('OK ADD NEW PRODUCT');
          })
          .catch((err) => {
            dispatch(errorProducts(err));
            reject(err);
          })
          .finally(() => {
            dispatch(loadingProducts(false));
          });
      });
    };
  };
  export const CompaniesDeleteSucces = (payload) => {
    return {type : COMPANIESID_DELETE_SUCCESS, payload}
}

export const CompaniesIdSucces = (payload) => {
  return {type : FETCH_COMPANIESID_SUCCESS, payload}
}

export const fetchCompaniesId = (id) => {
  return (dispatch,getState) => {
    dispatch(loadingProducts(true));
    dispatch(errorProducts(null));
      fetch(`${baseUrl}/company/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        // console.log(data);
        dispatch(CompaniesIdSucces(data));
      })
      .catch((err) => {
        dispatch(errorProducts(err));
      })
      .finally(() => {
        dispatch(loadingProducts(false));
      });
      
  }
}

  // =========================== FETCHING TRABSACTIONS ===========================
  
  export const setTransaction = (payload) => {
    return {
      type: FETCH_TRANSACTIONS_SUCCESS,
      payload,
    };
  };
  
  export const fetchTransaction = (payload) => {
    return (dispatch, getState) => {
      dispatch(loadingProducts(true));
      dispatch(errorProducts(null));
      fetch(`${baseUrl}/transaction`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          // console.log(data);
          dispatch(setTransaction(data));
        })
        .catch((err) => {
          dispatch(errorProducts(err));
        })
        .finally(() => {
          dispatch(loadingProducts(false));
        });
    };
  };

  export const addTransaction = (payload) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(loadingUser(true));
        dispatch(errorUser(null));
        fetch(`${baseUrl}/transaction`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.getItem('access_token'),
          },
          body: JSON.stringify(payload),
        })
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              // console.log(data.statusText);
              throw new Error(data.statusText);
            }
          })
          .then((data) => {
            // console.log(data, '<<<<<<<<<<<<<<<<<<<<<< INI DATA SETELAH REGISTER');
  
            if (!data.message) {
              resolve();
            }
            // console.log('OK ADD NEW PRODUCT');
          })
          .catch((err) => {
            dispatch(errorProducts(err));
            reject(err);
          })
          .finally(() => {
            dispatch(loadingProducts(false));
          });
      });
    };
  };
  export const transactionDeleteSucces = (payload) => {
    return {type : TRANSACTIONSID_DELETE_SUCCESS, payload}
}

export const transactionIdSuccess = (payload) => {
  return {type : FETCH_TRANSACTIONSID_SUCCESS, payload}
}

export const fetchTransactionId = (id) => {
  return (dispatch,getState) => {
    dispatch(loadingProducts(true));
    dispatch(errorProducts(null));
      fetch(`${baseUrl}/transaction/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        // console.log(data);
        dispatch(transactionIdSuccess(data));
      })
      .catch((err) => {
        dispatch(errorProducts(err));
      })
      .finally(() => {
        dispatch(loadingProducts(false));
      });
      
  }
}

export const setReport = (payload) => {
  return {
    type: FETCH_REPORTS_SUCCESS,
    payload,
  };
};

export const fetchReport = (payload) => {
  return (dispatch, getState) => {
    dispatch(loadingProducts(true));
    dispatch(errorProducts(null));
    fetch(`${baseUrl}/report`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        // console.log(data);
        dispatch(setReport(data));
      })
      .catch((err) => {
        dispatch(errorProducts(err));
      })
      .finally(() => {
        dispatch(loadingProducts(false));
      });
  };
};