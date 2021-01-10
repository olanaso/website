module.exports = {
  docs: [
    {
      type: "category",
      label: "Project OpenUBL",
      items: ["introduction", "design-principles", "contributing"],
    },
    {
      type: "category",
      label: "Librerías Java",
      collapsed: false,
      items: ["java-library-xbuilder", "java-library-xsender"],
    },
  ],
  xbuilder: [
    "xbuilder/index",
    "xbuilder/installation",
    "xbuilder/concepts",
    "xbuilder/createXml",
    "xbuilder/signXml",
    "xbuilder/example",
    {
      type: "category",
      label: "Perú",
      items: [        
        "xbuilder/peru/invoice",
        "xbuilder/peru/creditNote",
        "xbuilder/peru/debitNote",
        "xbuilder/peru/voidedDocument",
        "xbuilder/peru/summaryDocument",
        "xbuilder/peru/igv",
        "xbuilder/peru/icb",
        "xbuilder/peru/sellingPrice",
      ],
    },
    "xbuilder/qa",
  ],
  xsender: [
    "xsender/index",
    {
      type: "category",
      label: "Java library",
      items: [
        "xsender/library/installation",
        "xsender/library/gettingStarted",
        "xsender/library/smartSend",
        {
          type: "category",
          label: "BillService",
          items: [
            "xsender/library/billService/sendBill",
            "xsender/library/billService/sendSummary",
            "xsender/library/billService/getStatus",
          ],
        },
        {
          type: "category",
          label: "BillConsultService",
          items: [
            "xsender/library/billConsultService/getStatus",
            "xsender/library/billConsultService/getStatusCrd",
          ],
        },
        {
          type: "category",
          label: "BillValidService",
          items: ["xsender/library/billValidService/getStatus"],
        },
      ],
    },
    {
      type: "category",
      label: "Standalone server",
      items: ["xsender/server/installation"],
    },
  ],
};
