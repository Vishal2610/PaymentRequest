if(window.PaymentRequest){
  const supportedPaymentMethods = [{
    supportedMethods: ['basic-card']
  }];
  const paymentDetails = {
    total : {
      label : 'cost',
      amount : {
        currency : 'GBP',
        value : 30
      }
    }
  }

  const customOptions = {}

  const paymentRequest = new PaymentRequest(supportedPaymentMethods, paymentDetails, customOptions);
  paymentRequest.show().then(success => console.log(success))
          .catch(err => console.error(err));

}else{

}
