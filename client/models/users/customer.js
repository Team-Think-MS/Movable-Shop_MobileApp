class Customer {
  constructor(
    customerId,
    sellerName,
    password,
    email,
    userName,
    address,
    location,
    contactNumber
  ) {
    this.customerId = customerId;
    this.sellerName = sellerName;
    this.password = password;
    this.email = email;
    this.userName = userName;
    this.address = address;
    this.location = location;
    this.contactNumber = contactNumber;
  }
}

export default Customer;
