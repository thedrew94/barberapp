// @GET /api/getShop
exports.getShop = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Data fetched successfully",
    data: [
      {
        businessID: "1",
        businessName: "Un taglio E via",
        businessAddress: "via della montagna verde 999",
        businessCity: "Roma",
      },
      {
        businessID: "2",
        businessName: "Pelo lungo corto",
        businessAddress: "via giovanni 111",
        businessCity: "Milano",
      },
    ],
  });
};
