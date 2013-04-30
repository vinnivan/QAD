//var rootMenu = [
//    { name: "PO Arrival", view: "frmPOReceiptArrival.html", description: "Acknowledge arrival of items.", url: "images/inbox_download.png", group: "Receive" },

//    { name: "Inquiry", view: "frmInvInq.html", description: "Find information of item in stock.", url: "images/magnifier.png", group: "Inventory" },
//    { name: "Transfer", view: "frmInvTransfer.html", description: "Transfer item from one location to another.", url: "images/walk.png", group: "Inventory" },
//    { name: "Count", view: "frmInvCount.html", description: "Perform a physical count of an item.", url: "images/calculator_edit.png", group: "Inventory" },
//    { name: "Profit", view: "frmInvProfit.html", description: "Receive items into stock.", url: "images/server_components.png", group: "Inventory" },
//    { name: "Loss", view: "frmInvLoss.html", description: "Remove item from in stock.", url: "images/paintcan.png", group: "Inventory" },
//    { name: "Item Label Reprint", view: "frmItemLabel.html", description: "Reprint labels for item in stock.", url: "images/printer.png", group: "Inventory" },
//    { name: "Tag Counting", view: "frmTagCounting.html", description: "Perform a physical count of tagged items.", url: "images/tag_blue_add.png", group: "Inventory" },

//    { name: "Product Arrival", view: "frmProdArrival.html", description: "Acknowledge arrival of product.", url: "images/lorry_add.png", group: "Manufacturing" },
//    { name: "Product Picking", view: "frmProductionPickList.html", description: "Pick items for production.", url: "images/basket_put.png", group: "Manufacturing" },
//    { name: "BOM Finish", view: "frmBOMFinish.html", description: "Update Bill of Materials with details.", url: "images/report_edit.png", group: "Manufacturing" },

//    { name: "Shipment Picking", view: "frmSalesPickingRoute.html", description: "Sales picking route.", url: "images/cart_add.png", group: "Shipping" },
//    { name: "Load Shipment", view: "frmLoadShipment.html", description: "Load Shipment.", url: "images/forklift.png", group: "Shipping" }
//];


var rootMenu = [
    { name: "PO Receipt", view: "frmPOReceipt.html", description: "Acknowledge arrival of items.", url: "images/inbox_download.png", group: "Receive" },
    { name: "Unplanned Receipt", view: "frmUnplannedReceipts.html", description: "Acknowledge unplanned arrival of items.", url: "images/inbox_download.png", group: "Receive" },
    { name: "ASN Receipt", view: "frmASNReceipt.html", description: "Acknowledge ASN items.", url: "images/inbox_download.png", group: "Receive" },
    { name: "ASN Receipt Verify", view: "frmASNReceipt.html", description: "Verify acknowledge ASN items.", url: "images/inbox_download.png", group: "Receive" },

    { name: "Work Order Issue", view: "frmWOComponentIssue.html", description: "Issue product on work order.", url: "images/lorry_add.png", group: "Manufacturing" },
    { name: "Work Order Receipt", view: "frmWOReceipt.html", description: "Receive items for production.", url: "images/basket_put.png", group: "Manufacturing" },
    { name: "Inactive IntelliLabels", view: "frmGenInactiveLabel.html", description: "Inactive IntelliLabels.", url: "images/report_edit.png", group: "Manufacturing" },
    { name: "Inactive Blank IntelliLabels", view: "frmGenInactiveLabel.html", description: "Inactive blank IntelliLabels.", url: "images/report_edit.png", group: "Manufacturing" },
    { name: "Advanced Repetitive Backflush", view: "frmBackFlush.html", description: "Advanced repetitive Backflush.", url: "images/report_edit.png", group: "Manufacturing" },

    { name: "Sales Order Shipments", view: "frmSOShipment.html", description: "Sales picking route.", url: "images/cart_add.png", group: "Shipping" },
    { name: "Shipper Work Bench", view: "frmShipperWB.html", description: "Load Shipment.", url: "images/forklift.png", group: "Shipping" },
    { name: "Shipper Verify", view: "frmShipperVerify.html", description: "Load Shipment.", url: "images/forklift.png", group: "Shipping" },
    { name: "Honda Shipments", view: "frmSOPickConHonda.html", description: "Load Shipment.", url: "images/forklift.png", group: "Shipping" },
    { name: "DO Shipments", view: "frmDOPickCon.html", description: "Load Shipment.", url: "images/forklift.png", group: "Shipping" },

    { name: "Location Transfer", view: "frmLocationTransfer.html", description: "Receive items into stock.", url: "images/server_components.png", group: "Inventory" },
    { name: "IntelliLabel Location Transfer", view: "frmLocationTransferIL.html", description: "Receive items into stock.", url: "images/server_components.png", group: "Inventory" },
    { name: "Pick Replenish", view: "frmSterlingReplenishment.html", description: "Transfer item from one location to another.", url: "images/walk.png", group: "Inventory" },
    { name: "Inquiry", view: "frmInventoryInquiryByItem.html", description: "Find information of item in stock.", url: "images/magnifier.png", group: "Inventory" },

    { name: "Cycle Count", view: "frmCycleCount.html", description: "Perform a physical count of an item.", url: "images/calculator_edit.png", group: "Count" },
    { name: "Cycle Recount", view: "frmCycleRecount.html", description: "Remove item from in stock.", url: "images/paintcan.png", group: "Count" },
    { name: "Tag Count", view: "frmPhysicalCount.html", description: "Reprint labels for item in stock.", url: "images/printer.png", group: "Count" },
    { name: "Tag Recount", view: "frmPhysicalRecount.html", description: "Reprint labels for item in stock.", url: "images/printer.png", group: "Count" },

    { name: "Create Replenishment", view: "frmTMSBinReplenishment.html", description: "Perform a physical count of tagged items.", url: "images/tag_blue_add.png", group: "WorkForce Director" },
    { name: "Cancel Replenishment", view: "frmTMSCancelBinByLoc.html", description: "Perform a physical count of tagged items.", url: "images/tag_blue_add.png", group: "WorkForce Director" },
    { name: "Tasks List", view: "frmTMSTaskPromptList.html", description: "Perform a physical count of tagged items.", url: "images/tag_blue_add.png", group: "WorkForce Director" },
    { name: "Change Region", view: "frmTMSChangeRegion.html", description: "Perform a physical count of tagged items.", url: "images/tag_blue_add.png", group: "WorkForce Director" },

];

/* */