const dummySMSFire = () => {
  console.log('Mock SMS messages fire')
};

const triggerCheckins = () => {
  dummySMSFire();
  // setTimeout(triggerCheckins, 1000); //trigger a checkin message every minute
};

export default triggerCheckins;
