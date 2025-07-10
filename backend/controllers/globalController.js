// @GET /api/getShop
exports.getShop = async (req, res, next) => {
  let searchQuery = req.query.s ? req.query.s.trim() : null;

  if (searchQuery) {
    if (typeof searchQuery !== "string" || searchQuery.length < 1 || searchQuery.length > 30) {
      return res.status(400).json({
        status: "error",
        message: "Search query is too long or invalid",
        data: null,
      });
    }

    // Escape special regex characters to prevent ReDoS
    searchQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // TODO: build query and filter the results

  res.status(200).json({
    status: "success",
    message: "Data fetched successfully",
    data: [
      {
        businessID: "1",
        businessOpen: true,
        businessName: "Un taglio E via",
        businessAddress: "via della montagna verde 999",
        businessCity: "Roma",
        businessHours: "",
        /**
         * 1 = lunedi
         * 2 = martedi
         * ...
         * 8 = tutti i giorni
         */
        businessDays: [1, 2, 3, 4, 5],
        businessPhonePrimary: 123456789,
        businessPhoneSecondary: 123456789,
        businessEmailPrimary: "aaa@gmail.com",
        businessEmailSecondary: "bbb@gmail.com",
        businessWebsite: "www.google.com",
        businessSocialLink1: "",
        businessSocialLink2: "",
        businessSocialLink3: "",
        businessLogo: "/logo.png",
        businessImgBg: "/bg.png",
        businessRating: 4.4,
        businessReviews: [],
        /**
         * 1 = him
         * 2 = her
         * 3 = animals
         * 4 = him & her
         */
        businessTarget: 1,
        businessWorkers: [
          {
            workerID: "1",
            workerName: "Adriano Vivi",
            workerAvatar: "/avatar.png",
            workerAvailable: true,
          },
          {
            workerID: "2",
            workerName: "Luka del Cazzo",
            workerAvatar: "/avatar.png",
            workerAvailable: true,
          },
          {
            workerID: "3",
            workerName: "Ottaviano Grappa",
            workerAvatar: "/avatar.png",
            workerAvailable: true,
          },
        ],
        businessMenu: [
          {
            menuTitle: "Per lui",
            menuEl: [
              {
                menuElAvailable: true,
                menuElTitle: "Taglio capelli classico",
                menuElDescription: "un taglio di capelli classico con tanto di bacino sulla testa finale",
                menuElTimeSeconds: 120,
                menuElPrice: 999.99,
                menuElTarget: 4,
                menuElCapableWorkers: ["2"],
              },
              {
                menuElAvailable: false,
                menuElTitle: "Taglio capelli classico con shampoo",
                menuElDescription: "un taglio di capelli classico con tanto di bacino sulla testa finale",
                menuElTimeSeconds: 120,
                menuElPrice: 9999.99,
                menuElCapableWorkers: ["1", "3"],
              },
            ],
          },
          {
            menuTitle: "Per lei",
            menuEl: [
              {
                menuElAvailable: true,
                menuElTitle: "Taglio capelli classico",
                menuElDescription: "un taglio di capelli classico con tanto di bacino sulla testa finale",
                menuElTimeSeconds: 120,
                menuElPrice: 999.99,
                menuElTarget: 4,
                menuElCapableWorkers: ["1", "2", "3"],
              },
              {
                menuElAvailable: true,
                menuElTitle: "Taglio capelli classico con shampoo",
                menuElDescription: "un taglio di capelli classico con tanto di bacino sulla testa finale",
                menuElTimeSeconds: 120,
                menuElPrice: 9999.99,
                menuElCapableWorkers: ["1", "2"],
              },
            ],
          },
        ],
      },
      {
        businessID: "2",
        businessOpen: true,
        businessName: "Pelo lungo corto",
        businessAddress: "via giovanni 111",
        businessCity: "Milano",
        businessHours: "",
        businessDays: [1, 2, 3, 4, 5],
        businessPhonePrimary: 123456789,
        businessPhoneSecondary: 123456789,
        businessEmailPrimary: "aaa@gmail.com",
        businessEmailSecondary: "bbb@gmail.com",
        businessWebsite: "www.google.com",
        businessSocialLink1: "",
        businessSocialLink2: "",
        businessSocialLink3: "",
        businessLogo: "/logo.png",
        businessImgBg: "/bg.png",
        businessRating: 4.4,
        businessReviews: [],
        /**
         * 1 = him
         * 2 = her
         * 3 = animals
         * 4 = him & her
         */
        businessTarget: 1,
        businessWorkers: [
          {
            workerName: "Marko lo spray",
          },
          {
            workerName: "Marko lo spray",
          },
          {
            workerName: "Marko lo spray",
          },
        ],
        businessMenu: [
          {
            menuTitle: "Per lui",
            menuEl: [
              {
                menuElTitle: "Taglio capelli classico",
                menuElDescription: "un taglio di capelli classico con tanto di bacino sulla testa finale",
                menuElTimeSeconds: 120,
                menuElPrice: 999.99,
                menuElTarget: "d",
              },
              {
                menuElTitle: "Taglio capelli classico con shampoo",
                menuElDescription: "un taglio di capelli classico con tanto di bacino sulla testa finale",
                menuElTimeSeconds: 120,
                menuElPrice: 9999.99,
              },
            ],
          },
          {
            menuTitle: "Per lei",
            menuEl: [
              {
                menuElTitle: "Taglio capelli classico",
                menuElDescription: "un taglio di capelli classico con tanto di bacino sulla testa finale",
                menuElTimeSeconds: 120,
                menuElPrice: 999.99,
                menuElTarget: "d",
              },
              {
                menuElTitle: "Taglio capelli classico con shampoo",
                menuElDescription: "un taglio di capelli classico con tanto di bacino sulla testa finale",
                menuElTimeSeconds: 120,
                menuElPrice: 9999.99,
              },
            ],
          },
        ],
      },
    ],
  });
};

// @GET /api/getSingleShop
exports.getSingleShop = async (req, res, next) => {
  const { shopID } = req.params;

  if (!shopID || typeof shopID !== "string" || shopID.trim().length === 0 || shopID.trim().length > 30) {
    return res.status(400).json({
      status: "error",
      message: "Invalid shopID",
      data: null,
    });
  }

  // TODO: add a regex or a replace function to escape the special characters

  res.status(200).json({
    status: "success",
    message: "Data fetched successfully",
    data: {
      businessID: "1",
      businessOpen: true,
      businessName: "Un taglio E via",
      businessAddress: "via della montagna verde 999",
      businessCity: "Roma",
      businessHours: "",
      /**
       * 1 = lunedi
       * 2 = martedi
       * ...
       * 8 = tutti i giorni
       */
      businessDays: [1, 2, 3, 4, 5],
      businessPhonePrimary: 123456789,
      businessPhoneSecondary: 123456789,
      businessEmailPrimary: "aaa@gmail.com",
      businessEmailSecondary: "bbb@gmail.com",
      businessWebsite: "www.google.com",
      businessSocialLink1: "",
      businessSocialLink2: "",
      businessSocialLink3: "",
      businessLogo: "/logo.png",
      businessImgBg: "/bg.png",
      businessRating: 4.4,
      businessReviews: [],
      /**
       * 1 = him
       * 2 = her
       * 3 = animals
       * 4 = him & her
       */
      businessTarget: 1,
      businessWorkers: [
        {
          workerID: "1",
          workerName: "Adriano Vivi",
          workerAvatar: "/avatar.png",
          workerAvailable: true,
        },
        {
          workerID: "2",
          workerName: "Luka del Cazzo",
          workerAvatar: "/avatar.png",
          workerAvailable: true,
        },
        {
          workerID: "3",
          workerName: "Ottaviano Grappa",
          workerAvatar: "/avatar.png",
          workerAvailable: true,
        },
      ],
      businessMenu: [
        {
          menuTitle: "Per lui",
          menuEl: [
            {
              menuElAvailable: true,
              menuElTitle: "Taglio capelli classico",
              menuElDescription: "un taglio di capelli classico con tanto di bacino sulla testa finale",
              menuElTimeSeconds: 120,
              menuElPrice: 999.99,
              menuElTarget: 4,
              menuElCapableWorkers: ["2"],
            },
            {
              menuElAvailable: false,
              menuElTitle: "Taglio capelli classico con shampoo",
              menuElDescription: "un taglio di capelli classico con tanto di bacino sulla testa finale",
              menuElTimeSeconds: 120,
              menuElPrice: 9999.99,
              menuElCapableWorkers: ["1", "3"],
            },
          ],
        },
        {
          menuTitle: "Per lei",
          menuEl: [
            {
              menuElAvailable: true,
              menuElTitle: "Taglio capelli classico",
              menuElDescription: "un taglio di capelli classico con tanto di bacino sulla testa finale",
              menuElTimeSeconds: 120,
              menuElPrice: 999.99,
              menuElTarget: 4,
              menuElCapableWorkers: ["1", "2", "3"],
            },
            {
              menuElAvailable: true,
              menuElTitle: "Taglio capelli classico con shampoo",
              menuElDescription: "un taglio di capelli classico con tanto di bacino sulla testa finale",
              menuElTimeSeconds: 120,
              menuElPrice: 9999.99,
              menuElCapableWorkers: ["1", "2"],
            },
          ],
        },
      ],
    },
  });
};
