enum AccessPermissions {
  None = 0,
  Read = 1,
  Write = 2,
  ReadWrite = Read + Write,
  Delete = 4,
  All = Read + Write + Delete,
}
console.log(AccessPermissions.ReadWrite);
console.log(AccessPermissions.All);
