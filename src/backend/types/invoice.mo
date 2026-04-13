import Common "common";

module {
  public type Invoice = {
    id : Common.InvoiceId;
    createdAt : Common.Timestamp;
    client : Text;
    amount : Nat;
    discount : Nat;
    total : Nat;
  };
};
