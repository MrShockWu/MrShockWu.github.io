(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marketing-marketing-module"],{

/***/ "./src/app/pages/tzb/custom/marketing/direct-review/direct-review.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/direct-review/direct-review.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\" style=\"padding:0;\">\r\n    <div class=\"ui-g-12 cont\">\r\n        <!-- *ngIf=\"BasicElement\" -->\r\n        <div class=\"ui-g-12 module\">\r\n            <header-title [Info]=\"'营销基本要素'\"></header-title>\r\n            <div class=\"ui-g-12\" style=\"padding:0;\">\r\n                <div class=\"ui-g-4\">\r\n                    <div class=\"ui-g-4 rask-rule\" style=\"padding:0;\">\r\n                        营销活动名称：\r\n                    </div>\r\n                    <div class=\"ui-g-8\" style=\"padding:0;\">\r\n                        {{totalMessage.campaignName}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <div class=\"ui-g-4 rask-rule\" style=\"padding:0;\">\r\n                        任务类型：\r\n                    </div>\r\n                    <div class=\"ui-g-8\" style=\"padding:0;\">\r\n                        {{totalMessage.marketingCampaigntType |codeValuePie:MarketingCampaigntType}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <div class=\"ui-g-6 rask-rule\" style=\"padding:0;\">\r\n                        营销活动时间：\r\n                    </div>\r\n                    <div class=\"ui-g-6\" style=\"padding:0;\">\r\n                        {{totalMessage.fromDate}}至{{totalMessage.thruDate}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" style=\"padding:0;\">\r\n                <div class=\"ui-g-4\">\r\n                    <div class=\"ui-g-4 rask-rule\" style=\"padding:0;\">\r\n                        营销监控时间：\r\n                    </div>\r\n                    <div class=\"ui-g-8\" style=\"padding:0;\">\r\n                        {{totalMessage.marMonitoringTimeFrom}}至{{totalMessage.marMonitoringTimeTo}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <div class=\"ui-g-4 rask-rule\" style=\"padding:0;\">\r\n                        营销方案：\r\n                    </div>\r\n                    <div class=\"ui-g-6\" (click)=\"btnDetail()\" style=\"color:#19b0c8;  cursor: pointer;padding:0;\">\r\n                        {{totalMessage.marketingProgramName}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <div class=\"ui-g-6 rask-rule\" style=\"padding:0;\">\r\n                        营销活动状态：\r\n                    </div>\r\n                    <div class=\"ui-g-6\" style=\"padding:0;\">\r\n                        {{totalMessage.statusId |codeValuePie:status}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" style=\"padding:0;\">\r\n                <div class=\"ui-g-2 rask-rule title\">\r\n                    营销活动说明：\r\n                </div>\r\n                <div class=\"ui-g-10\" style=\"padding-left:0;padding-right:0;padding-bottom:0;width:91%;\">\r\n                    <textarea pInputTextarea autoResize=\"autoResize\" [rows]=\"2\" [(ngModel)]=\"totalMessage.marketingContentDes\" [disabled]=\"true\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-offset-2 ui-g-10\" style=\"padding:0;\" *ngIf=\"fileList1.length>0\">\r\n                <p-dataTable class=\"scrotable\" [value]=\"fileList1\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n                    <p-column field=\"fileName\" header=\"附件名称\">\r\n                        <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                            <span>{{col.fileName}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column header=\"操作\">\r\n                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            <span (click)=\"down(col)\" class=\"tabelDownloadIco\">下载</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                </p-dataTable>\r\n            </div>\r\n            <div class=\"ui-g-12\" style=\"padding:0;\">\r\n                <!-- <div class=\"ui-g-2 rask-rule title\">\r\n                        营销目标：\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        {{totalMessage.marketingTargetDes}}\r\n                    </div> -->\r\n                <div class=\"ui-g-2 rask-rule title\">\r\n                    营销目标：\r\n                </div>\r\n                <div class=\"ui-g-10\" style=\"padding-left:0;padding-right:0;padding-bottom:0;width:91%\">\r\n                    <textarea pInputTextarea autoResize=\"autoResize\" [rows]=\"2\" [(ngModel)]=\"totalMessage.marketingTargetDes\" [disabled]=\"true\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-offset-2 ui-g-10 \" style=\"padding:0;\" *ngIf=\"fileList2.length>0\">\r\n                <p-dataTable class=\"scrotable\" [value]=\"fileList2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n                    <p-column field=\"fileName\" header=\"附件名称\">\r\n                        <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                            <span>{{col.fileName}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column header=\"操作\">\r\n                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            <span (click)=\"down(col)\" class=\"tabelDownloadIco\">下载</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                </p-dataTable>\r\n            </div>\r\n        </div>\r\n        <!-- 信用卡直销营销对象 -->\r\n        <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"marketingCampaigntType =='16'\">\r\n            <!-- 营销对象 -->\r\n            <!-- *ngIf=\"MarketingObj\" -->\r\n            <header-title [Info]=\"'营销对象'\"></header-title>\r\n            <div class=\"ui-g-12 module\">\r\n                <div class=\"ui-g-2\" style=\"text-align:right;width: 18%;\">\r\n                    营销对象模式：\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <p-radioButton name=\"custType\" label=\"文件导入\" value=\"02\" [(ngModel)]=\"totalMessage.marketingObjectType\" *ngIf=\"totalMessage.marketingObjectType=='02'\"></p-radioButton>\r\n                    <p-radioButton name=\"custType\" label=\"大数据平台筛选\" value=\"03\" [(ngModel)]=\"totalMessage.marketingObjectType\" *ngIf=\"totalMessage.marketingObjectType=='03'\"></p-radioButton>\r\n                    <p-radioButton name=\"custType\" label=\"高级搜索\" value=\"01\" [(ngModel)]=\"totalMessage.marketingObjectType\" *ngIf=\"totalMessage.marketingObjectType=='01'\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-12\" style=\"padding:0\">\r\n                    <div class=\"ui-g-2\" style=\"text-align:right;width: 18%;\">\r\n                        文件实例号：\r\n                    </div>\r\n                    <div class=\"ui-g-7\">\r\n                        <span>{{totalMessage.deId}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- 客户营销的营销对象关联产品和促销手段的页面布局 -->\r\n        <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"marketingCampaigntType=='13'\">\r\n            <!-- 营销对象 -->\r\n            <!-- *ngIf=\"MarketingObj\" -->\r\n            <div class=\"ui-g-2 obj\">\r\n                <header-title [Info]=\"'营销对象'\"></header-title>\r\n                <div class=\"ui-g-6\" style=\"text-align:right\">\r\n                    营销对象模式：\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-radioButton name=\"custType\" label=\"文件导入\" value=\"02\" [(ngModel)]=\"totalMessage.marketingObjectType\" *ngIf=\"totalMessage.marketingObjectType=='02'\"></p-radioButton>\r\n                    <p-radioButton name=\"custType\" label=\"大数据平台筛选\" value=\"03\" [(ngModel)]=\"totalMessage.marketingObjectType\" *ngIf=\"totalMessage.marketingObjectType=='03'\"></p-radioButton>\r\n                    <p-radioButton name=\"custType\" label=\"高级搜索\" value=\"01\" [(ngModel)]=\"totalMessage.marketingObjectType\" *ngIf=\"totalMessage.marketingObjectType=='01'\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-12\" style=\"padding:0\">\r\n                    <div class=\"ui-g-6\" style=\"text-align:right\">\r\n                        文件实例号：\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <span>{{totalMessage.deId}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- 关联产品 *ngIf=\"ReleProduct\"-->\r\n            <div class=\"ui-g-4 product-title\">\r\n                <header-title [Info]=\"'关联产品'\"></header-title>\r\n                <p-dataTable class=\"scrotable\" [value]=\"dataListPro\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n                    <p-column field=\"\" header=\"序号\" [style]=\"{'width':'18%'}\">\r\n                        <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                            <span>{{i+1}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"productId\" header=\"产品编号\"></p-column>\r\n                    <p-column field=\"productName\" header=\"产品名称\" [style]=\"{'width':'18%'}\"></p-column>\r\n                </p-dataTable>\r\n            </div>\r\n            <!-- 促销手段 *ngIf=\"MarketingTool\"-->\r\n            <div class=\"ui-g-4 product-title\">\r\n                <header-title [Info]=\"'促销手段'\"></header-title>\r\n                <p-dataTable class=\"scrotable\" [value]=\"productData\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n                    <p-column field=\"\" header=\"产品名称\">\r\n                        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                            <span *ngFor=\"let product of item.productList\">{{product.productName}}&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"promoteType\" header=\"奖励类型\">\r\n                        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                            <span>{{item.promoteType|codeValuePie:PromoteType}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"promoteType\" header=\"参数类型\">\r\n                        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                            <span>{{item.conditionType|codeValuePie:ConditionType}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"conditionValue\" header=\"参数值\" [style]=\"{'width':'18%'}\"></p-column>\r\n                </p-dataTable>\r\n            </div>\r\n        </div>\r\n        <!-- 直销业务的营销对象关联产品和促销手段的页面布局 -->\r\n        <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"marketingCampaigntType=='01'\">\r\n            <!-- 营销对象 -->\r\n            <!-- *ngIf=\"MarketingObj\" -->\r\n            <!-- 关联产品 *ngIf=\"ReleProduct\"-->\r\n            <div class=\"ui-g-12 reProduct\">\r\n                <header-title [Info]=\"'关联产品'\"></header-title>\r\n                <p-dataTable class=\"scrotable\" [value]=\"dataListPro\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n                    <p-column field=\"\" header=\"序号\" [style]=\"{'width':'18%'}\">\r\n                        <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                            <span>{{i+1}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"productId\" header=\"产品编号\"></p-column>\r\n                    <p-column field=\"productName\" header=\"产品名称\" [style]=\"{'width':'22%'}\"></p-column>\r\n                </p-dataTable>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 obj\">\r\n                <header-title [Info]=\"'营销对象'\"></header-title>\r\n                <div class=\"ui-g-2\" style=\"text-align:right;width: 18%;\">\r\n                    营销对象模式：\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <p-radioButton name=\"custType\" label=\"文件导入\" value=\"02\" [(ngModel)]=\"totalMessage.marketingObjectType\" *ngIf=\"totalMessage.marketingObjectType=='02'\"></p-radioButton>\r\n                    <p-radioButton name=\"custType\" label=\"大数据平台筛选\" value=\"03\" [(ngModel)]=\"totalMessage.marketingObjectType\" *ngIf=\"totalMessage.marketingObjectType=='03'\"></p-radioButton>\r\n                    <p-radioButton name=\"custType\" label=\"高级搜索\" value=\"01\" [(ngModel)]=\"totalMessage.marketingObjectType\" *ngIf=\"totalMessage.marketingObjectType=='01'\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-12\" style=\"padding:0\">\r\n                    <div class=\"ui-g-2\" style=\"text-align:right;width: 18%;\">\r\n                        文件实例号：\r\n                    </div>\r\n                    <div class=\"ui-g-7\">\r\n                        <span>{{totalMessage.deId}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- 交叉销售产品及推送渠道页面布局 -->\r\n        <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"marketingCampaigntType=='12'\">\r\n            <div class=\"ui-g-6 reProduct\">\r\n                <header-title [Info]=\"'关联产品'\"></header-title>\r\n                <p-dataTable class=\"scrotable\" [value]=\"sellListPro\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n                    <p-column field=\"\" header=\"序号\" [style]=\"{'width':'22%'}\">\r\n                        <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                            <span>{{i+1}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"productId\" header=\"产品编号\" [style]=\"{'width':'26%'}\"></p-column>\r\n                    <p-column field=\"productName\" header=\"产品名称\" [style]=\"{'width':'26%'}\"></p-column>\r\n                </p-dataTable>\r\n            </div>\r\n            <div class=\"ui-g-6 obj\">\r\n                <header-title [Info]=\"'推送渠道'\"></header-title>\r\n                <div class=\"ui-g-12\" style=\"padding:0\">\r\n                    <div class=\"ui-g-2\" style=\"text-align:right;width: 18%;\">\r\n                        推送机构：\r\n                    </div>\r\n                    <div class=\"ui-g-2\">\r\n                        <span>{{limitOrg}}</span>\r\n                    </div>\r\n                    <div class=\"ui-g-2\" style=\"text-align:right;width: 18%;\">\r\n                        推送渠道：\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <span *ngFor=\"let channel of totalMessage.passiveChannelList\">{{channel.passiveChannelId|codeValuePie:PassiveChannelIds}}&nbsp;\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\" style=\"padding:0\">\r\n                    <div class=\"ui-g-2\" style=\"text-align:right;width: 18%;\">\r\n                        推送对象：\r\n                    </div>\r\n                    <div class=\"ui-g-7\">\r\n                        <span>{{totalMessage.marketingCampaignMap.pushObject|codeValuePie:pushObj}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\" style=\"padding:0\">\r\n                    <div class=\"ui-g-2\" style=\"text-align:right;width: 18%;\">\r\n                        执行人：\r\n                    </div>\r\n                    <div class=\"ui-g-7\">\r\n                        <span>{{totalMessage.marketingCampaignMap.personId}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- 交叉销售营销对象页面布局 -->\r\n        <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"marketingCampaigntType=='12'\">\r\n            <!-- 营销对象 -->\r\n            <header-title [Info]=\"'营销对象'\"></header-title>\r\n            <p-dataTable [value]=\"detailTable\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\" [emptyMessage]='tabMesg'>\r\n                <p-column field=\"batchId\" header=\"批次编号\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"dtCreatedate\" header=\"创建日期\" [style]=\"{'width':'110px'}\"></p-column>\r\n                <p-column field=\"custNo\" header=\"客户号\" [style]=\"{'width':'120px'}\"></p-column>\r\n                <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"productNo\" header=\"推荐产品编号\" [style]=\"{'width':'150px'}\"></p-column>\r\n                <p-column field=\"productName\" header=\"推荐产品名称\" [style]=\"{'width':'110px'}\"></p-column>\r\n                <p-column field=\"recReasons\" header=\"推荐理由\" [style]=\"{'width':'300px'}\"></p-column>\r\n                <p-column field=\"pushStat\" header=\"推送状态\" [style]=\"{'width':'110px'}\">\r\n                    <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n                        <span>{{item.pushStat|codeValuePie:pushStatOptions}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"marketStat\" header=\"营销活动状态\" [style]=\"{'width':'150px'}\">\r\n                    <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n                        <span>{{item.marketStat|codeValuePie:marketStatOptions}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"pushTime\" header=\"推送时间\" [style]=\"{'width':'110px'}\"></p-column>\r\n                <p-column field=\"closeConsumerSysId\" header=\"查看渠道\" [style]=\"{'width':'80px'}\">\r\n                    <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n                        <span>{{item.closeConsumerSysId|codeValuePie3:seqFlag1}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"isSeeInfo\" header=\"是否查看信息\" [style]=\"{'width':'80px'}\">\r\n                    <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n                        <span>{{item.isSeeInfo|codeValuePie:is}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"isMarketSucc\" header=\"是否销售成功\" [style]=\"{'width':'80px'}\">\r\n                    <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n                        <span>{{item.isMarketSucc|codeValuePie:is}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field={{list.fieldEnName}} *ngFor=\"let list of arrList\" [style]=\"{'width':'110px'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                        <div (click)=\"sort(list.fieldNo)\">{{list.fieldCnName}}</div>\r\n                    </ng-template>\r\n                    <!-- <ng-template pTemplate=\"body\" *ngIf=\"list.fieldEnName=='pushStat'\" let-item=\"rowData\">\r\n                                <span>{{item.pushStat|codeValuePie:pushStatOptions}}</span>\r\n                            </ng-template> -->\r\n                </p-column>\r\n            </p-dataTable>\r\n            <p-paginator [first]=\"first\" rows={{pageSize}} totalRecords={{total}} (onPageChange)=\"paginate($event)\"></p-paginator>\r\n        </div>\r\n        <!-- 除直销，客户营销，交叉销售之外的 -->\r\n        <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"marketingCampaigntType=='02'||marketingCampaigntType=='03'||marketingCampaigntType=='04'||marketingCampaigntType=='05'||marketingCampaigntType=='06'||marketingCampaigntType=='07'||marketingCampaigntType=='08'||marketingCampaigntType=='09'\">\r\n            <!-- 营销对象 -->\r\n            <!-- *ngIf=\"MarketingObj\" -->\r\n            <div class=\"ui-g-12\" style=\"padding:0;background: #fff;\">\r\n                <header-title [Info]=\"'营销对象'\"></header-title>\r\n                <div class=\"ui-g-2 rask-rule title\" style=\"text-align:right\">\r\n                    营销对象模式：\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <p-radioButton name=\"custType\" label=\"文件导入\" value=\"02\" [(ngModel)]=\"totalMessage.marketingObjectType\" *ngIf=\"totalMessage.marketingObjectType=='02'\"></p-radioButton>\r\n                    <p-radioButton name=\"custType\" label=\"大数据平台筛选\" value=\"03\" [(ngModel)]=\"totalMessage.marketingObjectType\" *ngIf=\"totalMessage.marketingObjectType=='03'\"></p-radioButton>\r\n                    <p-radioButton name=\"custType\" label=\"高级搜索\" value=\"01\" [(ngModel)]=\"totalMessage.marketingObjectType\" *ngIf=\"totalMessage.marketingObjectType=='01'\"></p-radioButton>\r\n                </div>\r\n                <div class=\"ui-g-12\" style=\"padding:0\">\r\n                    <div class=\"ui-g-2 rask-rule title\" style=\"text-align:right\">\r\n                        文件实例号：\r\n                    </div>\r\n                    <div class=\"ui-g-7\">\r\n                        <span>{{totalMessage.deId}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- 营销渠道 *ngIf=\"MarketingChannel\"-->\r\n        <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"marketingCampaigntType!='12'\">\r\n            <header-title [Info]=\"'营销渠道配置'\"></header-title>\r\n            <div class=\"ui-g-12 obj\" style=\"padding:0;margin-bottom:0\">\r\n                <div class=\"ui-g-12\" style=\"padding:0\">\r\n                    <div class=\"ui-g-6\">\r\n                        <span style=\"font-weight:700\">接触式渠道</span>\r\n                    </div>\r\n                </div>\r\n                <!-- 接触式 -->\r\n                <div class=\"ui-g-12\" style=\"padding:0\">\r\n                    <p-dataTable class=\"scrotable\" [value]=\"passiveChannelList\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" [style]=\"{'text-align':'center'}\"\r\n                        scrollWidth=\"100%\">\r\n                        <p-column field=\"passiveChannelId\" header=\"营销渠道\" [style]=\"{'width':'18%'}\">\r\n                            <ng-template let-i=\"rowIndex\" let-item=\"rowData\" pTemplate=\"body\">\r\n                                <span>{{item.passiveChannelId|codeValuePie:PassiveChannelId}}</span>\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column field=\"releaseMsg\" header=\"营销渠道发布信息\"></p-column>\r\n                    </p-dataTable>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 reProduct\" style=\"padding:0\">\r\n                <!-- 主动式 -->\r\n                <div class=\"ui-g-12\" style=\"padding:0\">\r\n                    <div class=\"ui-g-12 active\" style=\"padding:0\">\r\n                        <div class=\"ui-g-12\" style=\"padding:0\">\r\n                            <div class=\"ui-g-6\">\r\n                                <span style=\"font-weight:700\">主动式渠道</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-g-12\" style=\"padding:0;\">\r\n                            <div class=\"ui-g-2 rask-rule\" style=\"padding:0;\">\r\n                                <span>\r\n                                    任务推送规则：\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"ui-g-10\" style=\"padding:0;\">\r\n                                <div class=\"ui-g-4\" style=\"padding:0;\">\r\n                                    <p-dropdown class=\"gundam-dropdown\" [options]=\"raskRule\" [(ngModel)]=\"totalMessage.pushRules\" [disabled]=\"true\"></p-dropdown>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- 分配到岗位 -->\r\n                    <div class=\"ui-g-12\" *ngIf=\"totalMessage.pushRules=='02'\">\r\n                        <p-dataTable class=\"scrotable\" [value]=\"positionList\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" [style]=\"{'text-align':'center'}\"\r\n                            scrollWidth=\"100%\">\r\n                            <p-column field=\"positionId\" header=\"岗位编号\" [style]=\"{'width':'18%'}\"></p-column>\r\n                            <p-column field=\"positionName\" header=\"岗位名称\"></p-column>\r\n                            <p-column field=\"positionDescription\" header=\"岗位描述\" [style]=\"{'width':'18%'}\"></p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                    <!-- 渠道（客户） -->\r\n                    <div class=\"ui-g-12\" *ngIf=\"totalMessage.pushRules=='03'\">\r\n                        <p-dataTable class=\"scrotable\" [value]=\"channelList\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" [style]=\"{'text-align':'center'}\"\r\n                            class=\"table\">\r\n                            <p-column field=\"channelType\" header=\"渠道\" [style]=\"{'width':'18%'}\">\r\n                                <ng-template let-i=\"rowIndex\" let-item=\"rowData\" pTemplate=\"body\">\r\n                                    <span>{{item.channelType|codeValuePie:seqFlag}}</span>\r\n                                </ng-template>\r\n\r\n                            </p-column>\r\n                            <p-column field=\"messageName\" header=\" 模板名称\"></p-column>\r\n                            <p-column field=\"marketingChannelTimeFrom\" header=\"计划推送时间\" [style]=\"{'width':'18%'}\"></p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                    <!-- 据客户所属机构进行分配 据客户所属机构(部门)指定分配到岗位-->\r\n                    <div class=\"ui-g-12\" *ngIf=\"totalMessage.pushRules=='04'\">\r\n                        <div class=\"ui-g-6\">\r\n                            <span>据客户所属机构(部门)指定分配到岗位</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\" *ngIf=\"totalMessage.pushRules=='04'\">\r\n                        <p-dataTable class=\"scrotable\" [value]=\"positionList\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" [style]=\"{'text-align':'center'}\"\r\n                            scrollWidth=\"100%\" class=\"table\">\r\n                            <p-column field=\"positionId\" header=\"岗位编号\" [style]=\"{'width':'18%'}\"></p-column>\r\n                            <p-column field=\"positionName\" header=\"岗位名称\"></p-column>\r\n                            <p-column field=\"positionDescription\" header=\"岗位描述\"></p-column>\r\n                            <p-column field=\"\" header=\"所属机构\" [style]=\"{'width':'18%'}\">\r\n                                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                                    <span *ngFor=\"let orgParam of item.custOrgList\">{{orgParam.orgId}}&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n                                </ng-template>\r\n                            </p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                    <!-- 据客户所属机构(部门)指定分配到渠道 -->\r\n                    <div class=\"ui-g-12\" *ngIf=\"totalMessage.pushRules=='04'\">\r\n                        <div class=\"ui-g-6\">\r\n                            <span>据客户所属机构(部门)指定分配到渠道</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\" *ngIf=\"totalMessage.pushRules=='04'\">\r\n                        <p-dataTable class=\"scrotable\" [value]=\"channelList\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" [style]=\"{'text-align':'center'}\"\r\n                            class=\"table\">\r\n                            <p-column field=\"channelType\" header=\"渠道\" [style]=\"{'width':'18%'}\">\r\n                                <ng-template let-i=\"rowIndex\" let-item=\"rowData\" pTemplate=\"body\">\r\n                                    <span>{{item.channelType|codeValuePie:seqFlag}}</span>\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column field=\"messageName\" header=\" 模板名称\"></p-column>\r\n                            <p-column field=\"marketingChannelTimeFrom\" header=\"计划推送时间\"></p-column>\r\n                            <p-column field=\"\" header=\"所属机构\" [style]=\"{'width':'18%'}\">\r\n                                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                                    <span *ngFor=\"let orgParam of item.custOrgList\">{{orgParam.orgId}}&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n                                </ng-template>\r\n                            </p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                    <!-- 自定义执行人分配 -->\r\n                    <div class=\"ui-g-12\" *ngIf=\"totalMessage.pushRules=='05'\">\r\n                        <div class=\"ui-g-2 rask-rule\" style=\"padding:0;\">\r\n                            <span>\r\n                                推送对象类型：\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"ui-g-10\" style=\"padding:0;\">\r\n                            <div class=\"ui-g-4\" style=\"padding:0;\">\r\n                                <p-dropdown class=\"gundam-dropdown\" [options]=\"pushObj\" [(ngModel)]=\"totalMessage.marketingCampaignMap.pushObject\" disabled></p-dropdown>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-g-2 rask-rule\" *ngIf=\"totalMessage.marketingCampaignMap.pushObject=='03'\" style=\"padding:0;\">\r\n                            <span>\r\n                                执行人工号：\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"ui-g-10\" style=\"padding:0;\" *ngIf=\"totalMessage.marketingCampaignMap.pushObject=='03'\" style=\"padding:0;\">\r\n                            <div class=\"ui-g-4\" style=\"padding:0;\">\r\n                                <input type=\"text\" pInputText [(ngModel)]=\"totalMessage.marketingCampaignMap['personId']\" disabled/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-g-2 rask-rule\" *ngIf=\"totalMessage.marketingCampaignMap.pushObject=='03'\" style=\"padding:0;\">\r\n                            <span>\r\n                                执行人姓名：\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"ui-g-10\" style=\"padding:0;\" *ngIf=\"totalMessage.marketingCampaignMap.pushObject=='03'\">\r\n                            <div class=\"ui-g-4\" style=\"padding:0;\">\r\n                                <input type=\"text\" pInputText [(ngModel)]=\"totalMessage.marketingCampaignMap.personName\" disabled/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <!-- 营销要求 *ngIf=\"MarketingRequire\"-->\r\n        <div class=\"ui-g-12 module\" style=\"padding:0\" *ngIf=\"marketingCampaigntType=='01'||marketingCampaigntType=='13'\">\r\n            <header-title [Info]=\"'营销要求'\"></header-title>\r\n            <p-dataTable class=\"scrotable\" [value]=\"requestList\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n                <p-column field=\"endtime\" header=\"截至时间\" [style]=\"{'width':'9%'}\"></p-column>\r\n                <p-column field=\"disposeScheduleRequire\" header=\"处理进度要求(%)\"></p-column>\r\n                <p-column field=\"marketingSucRate\" header=\"营销成功率(%)\" [style]=\"{'width':'11%'}\"></p-column>\r\n            </p-dataTable>\r\n        </div>\r\n        <div class=\"ui-g-12\" style=\"text-align:center\">\r\n            <button pButton type=\"button\" (click)=\"doSure('3')\" label=\"同意\"></button>\r\n            <button pButton type=\"button\" (click)=\"doSure('1')\" label=\"否决\"></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" style=\"color:#fff;\" label=\"是\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" style=\"color:#fff;\" label=\"否\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/direct-review/direct-review.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/direct-review/direct-review.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.cont {\n  padding: 0; }\n.cont .module {\n    padding: 0; }\n.cont .position-relative {\n    position: relative;\n    height: 40px; }\n.cont .position-relative .float-right {\n      display: inline-block;\n      position: absolute;\n      right: 0; }\n:host/deep/ .gundam-accordion > div {\n  position: relative;\n  padding: 5px;\n  margin-top: .3em;\n  background-color: #fafafa; }\n:host/deep/ .gundam-accordion > div .clearfix {\n    /*******************accordion箭头右定位***********************/\n    /************************************************************/ }\n:host/deep/ .gundam-accordion > div .clearfix span.fa.fa-fw.fa-caret-right {\n      position: absolute;\n      left: auto;\n      right: 10px; }\n:host/deep/ .gundam-accordion > div .clearfix span.fa.fa-fw.fa-caret-right:before {\n      color: #9e9e9e; }\n:host/deep/ .gundam-accordion > div .clearfix .ui-accordion-header a {\n      height: 40px;\n      border-bottom: 1px solid #efefef; }\n:host/deep/ .gundam-accordion p-dropdown > div {\n  height: 30px; }\n:host/deep/ .gundam-accordion p-multiselect label {\n  line-height: 30px; }\n:host/deep/ .gundam-accordion p-multiselect .ui-widget-header {\n  background-color: #0094D2;\n  color: #fff;\n  border: 1px solid #0094D2; }\n:host/deep/ .gundam-accordion p-multiselect .ui-multiselect-panel.ui-widget .ui-multiselect-header .ui-multiselect-filter-container .ui-inputtext {\n  color: #000; }\n:host/deep/ .gundam-accordion p-multiselect > div {\n  white-space: nowrap;\n  border: 1px solid #bfbfbf; }\n:host/deep/ .gundam-accordion p-multiselect > div > div:nth-child(4) {\n    background-color: #fafafa; }\n:host/deep/ .gundam-accordion .ui-accordion-header-text {\n  position: absolute;\n  top: 11px;\n  height: 20px;\n  line-height: 20px;\n  display: block;\n  white-space: nowrap;\n  font-size: 16px;\n  color: #545454;\n  width: 25px;\n  font-weight: 500; }\n.rask-rule {\n  text-align: right; }\n:host/deep/ .gundam-accordion .ui-accordion-header-text:before {\n  content: '';\n  display: inline-block;\n  width: 3px;\n  height: 19px;\n  background: #19b0c8;\n  position: absolute;\n  top: 0;\n  left: -17px; }\n:host/deep/ .gundam-accordion .ui-datatable .ui-datatable-thead > tr > th {\n  background-color: #d2f1ef; }\n:host/deep/ .gundam-accordion:nth-child(odd) > div {\n  background: #efefef; }\n:host/deep/ .gundam-accordion:nth-child(odd) > div .ui-accordion-header a {\n    background: #efefef; }\n.gundam-accordion .cont {\n  -ms-flex-preferred-size: auto !important; }\n:host/deep/ .ui-accordion-content-wrapper-overflown {\n  height: auto !important; }\n.title {\n  width: 8.7% !important; }\n.ui-g-offset-2 {\n  margin-left: 8.7%;\n  width: 91%; }\n.obj {\n  background: #fff;\n  height: 181px;\n  margin-bottom: 0.5em;\n  padding: 0; }\n.product-title {\n  background: #fff;\n  margin-left: 0.4%;\n  width: 41.2% !important;\n  margin-bottom: 0.5em;\n  height: 181px;\n  padding: 0; }\n:host/deep/ .scrotable .ui-datatable {\n  max-height: 138px !important;\n  overflow: auto; }\n.reProduct {\n  background: #fff;\n  margin-bottom: 0.5em;\n  height: 181px;\n  padding: 0;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvZGlyZWN0LXJldmlldy9kaXJlY3QtcmV2aWV3LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vbWFya2V0aW5nL2RpcmVjdC1yZXZpZXcvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxtYXJrZXRpbmdcXGRpcmVjdC1yZXZpZXdcXGRpcmVjdC1yZXZpZXcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxVQUFVLEVBQUE7QUFEZDtJQUdRLFVBQVUsRUFBQTtBQUhsQjtJQU1RLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7QUFQcEI7TUFTWSxxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLFFBQVEsRUFBQTtBQUtwQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBO0FBSjdCO0lBTVEseURBQUE7SUFTQSw2REFBQSxFQUE4RDtBQWZ0RTtNQVFZLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsV0FBVyxFQUFBO0FBVnZCO01BYVksY0FBYyxFQUFBO0FBYjFCO01BaUJZLFlBQVk7TUFDWixnQ0FBZ0MsRUFBQTtBQU01QztFQUNJLFlBQVksRUFBQTtBQUloQjtFQUNJLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0kseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLFdBQVcsRUFBQTtBQUdmO0VBQ0ksbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBO0FBRjdCO0lBSVEseUJBQXlCLEVBQUE7QUFLakM7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0ksV0FBVztFQUNYLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVcsRUFBQTtBQUdmO0VBQ0kseUJBQXlCLEVBQUE7QUFJN0I7RUFDSSxtQkFBbUIsRUFBQTtBQUR2QjtJQUdRLG1CQUFtQixFQUFBO0FBSzNCO0VBQ0ksd0NBQXdDLEVBQUE7QUFHNUM7RUFDSSx1QkFBc0IsRUFBQTtBQUcxQjtFQUNJLHNCQUFzQixFQUFBO0FBRzFCO0VBQ0ksaUJBQWlCO0VBQ2pCLFVBQVUsRUFBQTtBQUdkO0VBQ0ksZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsVUFBVSxFQUFBO0FBR2Q7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFVBQVUsRUFBQTtBQUdkO0VBQ0ksNEJBQTRCO0VBQzVCLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFVBQVU7RUFDVixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL21hcmtldGluZy9kaXJlY3QtcmV2aWV3L2RpcmVjdC1yZXZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250IHtcbiAgcGFkZGluZzogMDsgfVxuICAuY29udCAubW9kdWxlIHtcbiAgICBwYWRkaW5nOiAwOyB9XG4gIC5jb250IC5wb3NpdGlvbi1yZWxhdGl2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNDBweDsgfVxuICAgIC5jb250IC5wb3NpdGlvbi1yZWxhdGl2ZSAuZmxvYXQtcmlnaHQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7IH1cblxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gPiBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogLjNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxuICA6aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiA+IGRpdiAuY2xlYXJmaXgge1xuICAgIC8qKioqKioqKioqKioqKioqKioqYWNjb3JkaW9u566t5aS05Y+z5a6a5L2NKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8gfVxuICAgIDpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uID4gZGl2IC5jbGVhcmZpeCBzcGFuLmZhLmZhLWZ3LmZhLWNhcmV0LXJpZ2h0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogMTBweDsgfVxuICAgIDpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uID4gZGl2IC5jbGVhcmZpeCBzcGFuLmZhLmZhLWZ3LmZhLWNhcmV0LXJpZ2h0OmJlZm9yZSB7XG4gICAgICBjb2xvcjogIzllOWU5ZTsgfVxuICAgIDpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uID4gZGl2IC5jbGVhcmZpeCAudWktYWNjb3JkaW9uLWhlYWRlciBhIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmOyB9XG5cbjpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uIHAtZHJvcGRvd24gPiBkaXYge1xuICBoZWlnaHQ6IDMwcHg7IH1cblxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gcC1tdWx0aXNlbGVjdCBsYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4OyB9XG5cbjpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uIHAtbXVsdGlzZWxlY3QgLnVpLXdpZGdldC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NEQyO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOTREMjsgfVxuXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiBwLW11bHRpc2VsZWN0IC51aS1tdWx0aXNlbGVjdC1wYW5lbC51aS13aWRnZXQgLnVpLW11bHRpc2VsZWN0LWhlYWRlciAudWktbXVsdGlzZWxlY3QtZmlsdGVyLWNvbnRhaW5lciAudWktaW5wdXR0ZXh0IHtcbiAgY29sb3I6ICMwMDA7IH1cblxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gcC1tdWx0aXNlbGVjdCA+IGRpdiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7IH1cbiAgOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gcC1tdWx0aXNlbGVjdCA+IGRpdiA+IGRpdjpudGgtY2hpbGQoNCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cblxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gLnVpLWFjY29yZGlvbi1oZWFkZXItdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgd2lkdGg6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLnJhc2stcnVsZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbjpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uIC51aS1hY2NvcmRpb24taGVhZGVyLXRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogLTE3cHg7IH1cblxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmYxZWY7IH1cblxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb246bnRoLWNoaWxkKG9kZCkgPiBkaXYge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmOyB9XG4gIDpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uOm50aC1jaGlsZChvZGQpID4gZGl2IC51aS1hY2NvcmRpb24taGVhZGVyIGEge1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7IH1cblxuLmd1bmRhbS1hY2NvcmRpb24gLmNvbnQge1xuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogYXV0byAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC51aS1hY2NvcmRpb24tY29udGVudC13cmFwcGVyLW92ZXJmbG93biB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyB9XG5cbi50aXRsZSB7XG4gIHdpZHRoOiA4LjclICFpbXBvcnRhbnQ7IH1cblxuLnVpLWctb2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogOC43JTtcbiAgd2lkdGg6IDkxJTsgfVxuXG4ub2JqIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxODFweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIHBhZGRpbmc6IDA7IH1cblxuLnByb2R1Y3QtdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMC40JTtcbiAgd2lkdGg6IDQxLjIlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBoZWlnaHQ6IDE4MXB4O1xuICBwYWRkaW5nOiAwOyB9XG5cbjpob3N0L2RlZXAvIC5zY3JvdGFibGUgLnVpLWRhdGF0YWJsZSB7XG4gIG1heC1oZWlnaHQ6IDEzOHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi5yZVByb2R1Y3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgaGVpZ2h0OiAxODFweDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cbiIsIi5jb250IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAubW9kdWxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLnBvc2l0aW9uLXJlbGF0aXZlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIC5mbG9hdC1yaWdodCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uPmRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAuM2VtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIC5jbGVhcmZpeCB7XHJcbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKiphY2NvcmRpb27nrq3lpLTlj7PlrprkvY0qKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgICAgICBzcGFuLmZhLmZhLWZ3LmZhLWNhcmV0LXJpZ2h0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhbi5mYS5mYS1mdy5mYS1jYXJldC1yaWdodDpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgICAgICAudWktYWNjb3JkaW9uLWhlYWRlciBhIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGRyb3Bkb3duIOS4i+aLiVxyXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiBwLWRyb3Bkb3duPmRpdiB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi8vIHAtbXVsdGlzZWxlY3RcclxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gcC1tdWx0aXNlbGVjdCBsYWJlbCB7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gcC1tdWx0aXNlbGVjdCAudWktd2lkZ2V0LWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NEQyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5NEQyO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiBwLW11bHRpc2VsZWN0IC51aS1tdWx0aXNlbGVjdC1wYW5lbC51aS13aWRnZXQgLnVpLW11bHRpc2VsZWN0LWhlYWRlciAudWktbXVsdGlzZWxlY3QtZmlsdGVyLWNvbnRhaW5lciAudWktaW5wdXR0ZXh0IHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiBwLW11bHRpc2VsZWN0PmRpdiB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcclxuICAgID5kaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBhY2NvcmRpb24g6KGo5qC8XHJcbjpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uIC51aS1hY2NvcmRpb24taGVhZGVyLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnJhc2stcnVsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmd1bmRhbS1hY2NvcmRpb24gLnVpLWFjY29yZGlvbi1oZWFkZXItdGV4dDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzE5YjBjODtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IC0xN3B4O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuZ3VuZGFtLWFjY29yZGlvbiAudWktZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHI+dGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QyZjFlZjtcclxufVxyXG5cclxuLy8gYWNjb3JkaW9uXHJcbjpob3N0L2RlZXAvIC5ndW5kYW0tYWNjb3JkaW9uOm50aC1jaGlsZChvZGQpPmRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgLnVpLWFjY29yZGlvbi1oZWFkZXIgYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgIH1cclxufVxyXG5cclxuLy8g5YW85a65aWXnmoTlhpnms5VcclxuLmd1bmRhbS1hY2NvcmRpb24gLmNvbnQge1xyXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWFjY29yZGlvbi1jb250ZW50LXdyYXBwZXItb3ZlcmZsb3duIHtcclxuICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICB3aWR0aDogOC43JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWktZy1vZmZzZXQtMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogOC43JTtcclxuICAgIHdpZHRoOiA5MSU7XHJcbn1cclxuXHJcbi5vYmoge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGhlaWdodDogMTgxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXRpdGxlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogMC40JTtcclxuICAgIHdpZHRoOiA0MS4yJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICBoZWlnaHQ6IDE4MXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnNjcm90YWJsZSAudWktZGF0YXRhYmxlIHtcclxuICAgIG1heC1oZWlnaHQ6IDEzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnJlUHJvZHVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOyAvLyBtYXJnaW4tbGVmdDogMC40JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgaGVpZ2h0OiAxODFweDtcclxuICAgIHBhZGRpbmc6IDA7IC8vIHdpZHRoOiA0OS41JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/direct-review/direct-review.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/direct-review/direct-review.ts ***!
  \***************************************************************************/
/*! exports provided: DirectReviewTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectReviewTree", function() { return DirectReviewTree; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_marketing_http_marketing_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/marketing/http/marketing.http.service */ "./src/app/pages/tzb/custom/marketing/http/marketing.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_pages_tzb_customCenter_customer_distribution_bean_business_information_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/customCenter/customer-distribution/bean/business-information.bean */ "./src/app/pages/tzb/customCenter/customer-distribution/bean/business-information.bean.ts");
/* harmony import */ var app_pages_tzb_customCenter_credit_cust_allot_bean_business_information_bean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/customCenter/credit-cust-allot/bean/business-information.bean */ "./src/app/pages/tzb/customCenter/credit-cust-allot/bean/business-information.bean.ts");
/* harmony import */ var app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/customCenter/http/custom-center.http.service */ "./src/app/pages/tzb/customCenter/http/custom-center.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DirectReviewTree = /** @class */ (function () {
    function DirectReviewTree(activatedRoute, cusOperationHttpService, commfunc, router, confirmationService, marketingHttpService, customCenterHttpService) {
        this.activatedRoute = activatedRoute;
        this.cusOperationHttpService = cusOperationHttpService;
        this.commfunc = commfunc;
        this.router = router;
        this.confirmationService = confirmationService;
        this.marketingHttpService = marketingHttpService;
        this.customCenterHttpService = customCenterHttpService;
        this.showFlag = true;
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_CUS_UPLOAD"]; //导入
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_CUS_DOWNLOAD"]; //下载
        this.fileList = [];
        this.files = [];
        this.msgs = [];
        this.fileList1 = []; //营销活动说明
        this.fileList2 = []; //营销目标
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.marketingContentFiles = [];
        this.openActive = 'open';
        this.aa = [1, 2];
        this.productData = []; //关联产品和促销手段
        this.channel = []; //营销渠道
        this.promote = []; //促销手段
        this.requestList = []; //营销要求
        this.display = false;
        // inValue:any;
        this.totalMessage = {}; //接收后台返回的数据
        this.seqFlag = [];
        this.seqFlag1 = [];
        this.MarketingWay = [];
        this.PromoteType = [];
        this.ConditionType = [];
        this.templateList = [];
        this.undisplay = false;
        this.copyDisplay = false;
        this.copyData = {};
        this.status = [];
        this.positionList = [];
        this.passiveChannelList = []; //接触式渠道
        this.channelList = [];
        this.raskRule = [];
        this.PassiveChannelId = [];
        this.PassiveChannelIds = [];
        this.pushObj = [];
        this.dataListPro = [];
        this.sellListPro = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.MarketingCampaigntType = [];
        this.flagSumit = false;
        this.url = [];
        this.BasicElement = false;
        this.MarketingObj = false;
        this.ReleProduct = false;
        this.MarketingTool = false;
        this.MarketingChannel = false;
        this.MarketingRequire = false;
        this.paramObj = {};
        this.dealPerShow = false; //选人
        this.dataMap = {};
        this.pushStatOptions = []; //推送状态
        this.marketStatOptions = []; //营销活动状态
        this.arrList = []; //表头
        this.is = [];
        this.total = 0;
        this.bussinessMap = new app_pages_tzb_customCenter_customer_distribution_bean_business_information_bean__WEBPACK_IMPORTED_MODULE_8__["BussinessMap"]();
        this.appproResultBean = new app_pages_tzb_customCenter_customer_distribution_bean_business_information_bean__WEBPACK_IMPORTED_MODULE_8__["AppproResultBean"]();
        this.vetoBean = new app_pages_tzb_customCenter_credit_cust_allot_bean_business_information_bean__WEBPACK_IMPORTED_MODULE_9__["VetoBean"]();
        this.subApproveMapBean = new app_pages_tzb_customCenter_customer_distribution_bean_business_information_bean__WEBPACK_IMPORTED_MODULE_8__["SubApproveMapBean"]();
        this.resultList = {};
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        if (this.activatedRoute.snapshot.params['marketingCampaignId']) {
            this.marketingCampaignId = this.activatedRoute.snapshot.params['marketingCampaignId'];
            this.marketingCampaigntType = this.activatedRoute.snapshot.params['marketingCampaigntType'];
            this.batchId = this.activatedRoute.snapshot.params['batchId'];
            this.secBatchId = this.activatedRoute.snapshot.params['secBatchId'];
            this.dataSource = this.activatedRoute.snapshot.params['dataSource'];
        }
        else {
            this.dataMap = JSON.parse(this.activatedRoute.snapshot.params.dataMap);
            this.marketingCampaignId = this.dataMap.bizPkFieldMap.marketingCampaignId;
            this.marketingCampaigntType = this.dataMap.bizPkFieldMap.marketingCampaigntType;
            this.taskId = this.activatedRoute.snapshot.params['taskId'];
        }
        this.type = this.activatedRoute.snapshot.params['type']; //判断是否是有提交按钮
        var chName = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.userId = chName.userId;
        this.typeCenter = this.activatedRoute.snapshot.params['statusId'];
        this.releaseUserId = this.activatedRoute.snapshot.params['releaseUserId'];
        this.campaign_approveSkipFlag = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.campaign_approveSkipFlag; //业务发展部主管
        this.campaign_FHapproveSkipFlag = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.campaign_FHapproveSkipFlag; //分行行长
        this.postId = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.postId;
        this.copyData = this.activatedRoute.snapshot.params;
        if (this.userId == this.releaseUserId && this.typeCenter == '3') {
            this.undisplay = true;
        }
        else {
            this.undisplay = false;
        }
        if (this.typeCenter == '3' || this.typeCenter == '8' || this.typeCenter == '9') {
            this.copyDisplay = true;
        }
        else {
            this.copyDisplay = false;
        }
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.seqFlag = this.code['SEQFlAG']; //营销渠道标识
        this.seqFlag1 = this.code['MarkingSeqFlag']; //营销渠道标识
        this.status = this.code['MarketingStatus'];
        this.MarketingWay = this.code['MARKETINGWAY']; //营销方式
        this.PromoteType = this.code['PROMOTETYPE']; //促销手段类型
        this.ConditionType = this.code['CONDITETYPE']; //促销条件类型
        this.PassiveChannelId = this.code['PassiveChannelId']; //渠道标识
        this.PassiveChannelIds = this.code['PassiveChannelIds']; //交叉销售渠道标识
        this.raskRule = this.code['RASKRULE']; //任务推送规则
        this.pushObj = this.code['pushObj']; //推送对象
        this.MarketingCampaigntType = this.code['MarketingCampaigntType']; //任务类型
        if (this.type == 'marking') { //判断是否是显示提交按钮
            this.checkSerIal();
            this.flagSumit = true;
        }
        this.url = JSON.parse(this.commfunc.getSessionDataCH('markingURL')); //配置页面
    }
    DirectReviewTree.prototype.ngOnInit = function () {
        this.pushTime = JSON.parse(this.commfunc.getSessionData('commonHeader')).lastTimeZone;
        this.pushStatOptions = this.code['Push_Stat']; //推送状态
        this.marketStatOptions = this.code['Market_Stat']; //营销活动状态
        this.is = this.code['VastRejList']; //是否
        if (this.marketingCampaigntType == '12') {
            this.chooseBtn(this.batchId, this.dataSource);
            this.query();
            this.pageSize = 10;
            this.pageNum = 1;
            this.first = 0;
            this.queryRecommendProduct();
        }
        if (this.activatedRoute.snapshot.params['taskId']) {
            this.showFlag = false; //详情返回的按钮
        }
        else {
            this.showFlag = true;
        }
        this.tointialize(); //详情
        this.commfunc.clearSession('flagIndex');
    };
    //表头查询
    DirectReviewTree.prototype.chooseBtn = function (batchId, dataSource) {
        var _this = this;
        var params = {
            // batchId: batchId,//批次编号
            // dataSource: dataSource,//数据来源
            marketingCampaignId: this.marketingCampaignId,
        };
        this.cusOperationHttpService.queryTableHeader(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.arrList = data.tableHeaderList;
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //查询
    DirectReviewTree.prototype.query = function () {
        var _this = this;
        var params = {
            // batchId: this.batchId,//批次编号
            // dataSource: this.dataSource,//数据来源
            // secBatchId: this.secBatchId,
            marketingCampaignId: this.marketingCampaignId,
            pageNum: this.pageNum,
            pageSize: this.pageSize,
        };
        this.cusOperationHttpService.queryCampaignCust(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.detailTable = data.campaignCustList;
                _this.total = data.totalNum;
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //翻页
    DirectReviewTree.prototype.paginate = function (event) {
        this.pageSize = event.rows * 1;
        //当前页
        this.pageNum = event.page + 1;
        this.first = event.page * this.pageSize;
        this.query();
    };
    // 交叉销售--产品查询（数据来源为模型）
    DirectReviewTree.prototype.queryRecommendProduct = function () {
        var _this = this;
        var param = {
            // batchId: this.batchId,// 批次号
            marketingCampaignId: this.marketingCampaignId,
        };
        this.marketingHttpService.queryRecommendProduct(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.sellListPro = data.recommendProductList;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //详情初始化
    DirectReviewTree.prototype.tointialize = function () {
        var _this = this;
        var param = {
            marketingCampaignId: this.marketingCampaignId
        };
        this.cusOperationHttpService.queryMarketingCampaignById(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.totalMessage = data;
                console.log(_this.totalMessage);
                _this.deId = data.deId;
                _this.marketingProgramId = data.marketingProgramId;
                _this.marketingCampaigntType = data.marketingCampaigntType;
                _this.fileList1 = data.marketingContentFileList; //营销活动说明
                _this.fileList2 = data.marketingTargetFileList; //营销目标
                _this.dataListPro = data.relationProductList; //关联产品
                _this.productData = data.prdAndPromRelList; //促销手段
                _this.passiveChannelList = data.passiveChannelList; //接触式渠道
                _this.positionList = data.positionList; //岗位
                _this.channelList = data.channelList;
                _this.requestList = data.requireList; //营销要求
                if (_this.totalMessage.marketingCampaignMap == null) {
                    _this.totalMessage.marketingCampaignMap = {};
                }
                else if (_this.totalMessage.marketingCampaignMap.limitOrg && _this.totalMessage.marketingCampaignMap.limitOrg != null) {
                    _this.cusOperationHttpService.queryOrgById({ orgId: _this.totalMessage.marketingCampaignMap.limitOrg }).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            _this.limitOrg = data.orgName;
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                        }
                    }, function (err) {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
                    });
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //提前终止
    DirectReviewTree.prototype.terminate = function () {
        this.headerTitle = "提前终止";
        this.display = true;
        this.inValue = { marketingCampaignId: this.marketingCampaignId };
    };
    //提前终止返回值
    DirectReviewTree.prototype.outValue = function (param) {
        this.display = param;
    };
    //复制营销活动
    DirectReviewTree.prototype.copy = function () {
        this.router.navigate(['/pages/tzb/custom/marketing/marketing-activite/create-marketing-activite/basic-element', this.copyData], { queryParams: { flag: '1' } });
    };
    //码值
    DirectReviewTree.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //点击页面营销方案中的查看详情按钮跳转营销方案详情页面
    DirectReviewTree.prototype.btnDetail = function () {
        this.router.navigate(['/pages/tzb/custom/marketing/marketing-project/marketing-program-detail', { marketingProgramId: this.marketingProgramId }]);
    };
    //返回按钮
    DirectReviewTree.prototype.returnBtn = function () {
        // setTimeout(() => {
        // 	window.history.go(-2);
        // }, 500)
        this.router.navigate(['/pages/tzb/custom/marketing/marketing-activite/marketing-activity-query']);
    };
    //下载按钮
    DirectReviewTree.prototype.down = function (temp) {
        var name = temp.fileName;
        var path = temp.fileUrl;
        open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(name) + "&fileUrl=" + path);
        console.log(encodeURI(name));
        // let name = '';
        // let path = temp.fileUrl;
        // let u_agent = navigator.userAgent;
        // if (u_agent.indexOf('Chrome') > -1) {
        // 	let donwname = temp.fileName.replace('(', '（');
        // 	name = donwname.replace(')', '）');
        // 	open(TZB_CUS_DOWNLOAD + "?fileName=" + name + "&fileUrl=" + path);
        // } else {
        // 	name = temp.fileName;
        // 	open(TZB_CUS_DOWNLOAD + "?fileName=" + encodeURI(name) + "&fileUrl=" + path);
    };
    //点击提交按钮
    DirectReviewTree.prototype.subMit = function () {
        var _this = this;
        if (this.marketingCampaigntType == '13' || this.marketingCampaigntType == '16') {
            debugger;
            if (this.campaign_approveSkipFlag) {
                this.confirmationService.confirm({
                    message: "当前登陆用户岗位为'业务发展部主管',是否跳过审批直接发布活动?",
                    accept: function () {
                        var arr = {};
                        var campaign_approveObj = {};
                        arr['marketingCampaignId'] = _this.marketingCampaignId;
                        arr['deId'] = _this.deId;
                        arr['marketingCampaigntType'] = _this.marketingCampaigntType;
                        campaign_approveObj['campaign_approveSkipFlag'] = _this.campaign_approveSkipFlag,
                            _this.paramObj = {
                                bizType: '02',
                                bizPkFieldMap: arr,
                                bizFieldMap: campaign_approveObj,
                            };
                        _this.approveClick(_this.paramObj);
                    },
                    reject: function () {
                        var arr = {};
                        var campaign_approveObj = {};
                        arr['marketingCampaignId'] = _this.marketingCampaignId;
                        arr['deId'] = _this.deId;
                        arr['marketingCampaigntType'] = _this.marketingCampaigntType;
                        _this.paramObj = {
                            bizType: '02',
                            bizPkFieldMap: arr,
                        };
                        var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        if (s.extParam.specifyNextOpers) {
                            delete s.extParam.specifyNextOpers;
                            var commonHeader = s;
                            _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                        }
                        _this.waitSelUserList = _this.commfunc.query('YXHDFHLC', { postId: _this.postId, marketingCampaigntType: _this.marketingCampaigntType });
                        if (!_this.waitSelUserList.erro) {
                            _this.outVal = _this.waitSelUserList.waitSelUserList;
                            var chooseThis = _this.waitSelUserList.display;
                            console.log(_this.dealPerShow);
                            var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                            var a2 = commonHeader.extParam.specifyNextOpers;
                            console.log(a2);
                            if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                                _this.dealPerShow = true;
                            }
                            else {
                                _this.approveClick(_this.paramObj);
                            }
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                        }
                    }
                });
            }
            else if (this.campaign_FHapproveSkipFlag == 'BELONG_MODE') {
                this.confirmationService.confirm({
                    message: "当前登陆用户岗位为'分行行长',是否跳过审批直接发布活动?",
                    accept: function () {
                        var arr = {};
                        var permissionModeObj = {};
                        arr['marketingCampaignId'] = _this.marketingCampaignId;
                        arr['deId'] = _this.deId;
                        arr['marketingCampaigntType'] = _this.marketingCampaigntType;
                        permissionModeObj['campaign_FHapproveSkipFlag'] = _this.campaign_FHapproveSkipFlag,
                            _this.paramObj = {
                                bizType: '02',
                                bizPkFieldMap: arr,
                                bizFieldMap: permissionModeObj,
                            };
                        _this.approveClick(_this.paramObj);
                    },
                    reject: function () {
                        var arr = {};
                        var campaign_approveObj = {};
                        arr['marketingCampaignId'] = _this.marketingCampaignId;
                        _this.paramObj = {
                            bizType: '02',
                            bizPkFieldMap: arr,
                        };
                        var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        if (s.extParam.specifyNextOpers) {
                            delete s.extParam.specifyNextOpers;
                            var commonHeader = s;
                            _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                        }
                        _this.waitSelUserList = _this.commfunc.query('YXHDFHLC', { postId: _this.postId, marketingCampaigntType: _this.marketingCampaigntType });
                        if (!_this.waitSelUserList.erro) {
                            _this.outVal = _this.waitSelUserList.waitSelUserList;
                            var chooseThis = _this.waitSelUserList.display;
                            console.log(_this.dealPerShow);
                            var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                            var a2 = commonHeader.extParam.specifyNextOpers;
                            console.log(a2);
                            if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                                _this.dealPerShow = true;
                            }
                            else {
                                _this.approveClick(_this.paramObj);
                            }
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                        }
                    }
                });
            }
            else {
                this.confirmationService.confirm({
                    message: '确定要提交吗?',
                    accept: function () {
                        var arr = {};
                        var campaign_approveObj = {};
                        arr['marketingCampaignId'] = _this.marketingCampaignId;
                        arr['deId'] = _this.deId;
                        arr['marketingCampaigntType'] = _this.marketingCampaigntType;
                        _this.paramObj = {
                            bizType: '02',
                            bizPkFieldMap: arr,
                        };
                        var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        if (s.extParam.specifyNextOpers) {
                            delete s.extParam.specifyNextOpers;
                            var commonHeader = s;
                            _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                        }
                        _this.waitSelUserList = _this.commfunc.query('YXHDFHLC', { postId: _this.postId, marketingCampaigntType: _this.marketingCampaigntType });
                        if (!_this.waitSelUserList.erro) {
                            _this.outVal = _this.waitSelUserList.waitSelUserList;
                            var chooseThis = _this.waitSelUserList.display;
                            console.log(_this.dealPerShow);
                            var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                            var a2 = commonHeader.extParam.specifyNextOpers;
                            console.log(a2);
                            if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                                _this.dealPerShow = true;
                            }
                            else {
                                _this.approveClick(_this.paramObj);
                            }
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                        }
                    }
                });
            }
        }
        else { //除营销外
            if (this.marketingCampaigntType == '12') {
                // 更新批次
                var params = {
                    batchId: this.batchId,
                    secBatchId: this.secBatchId,
                    sourceStat: '01',
                    marketingCampaignId: this.marketingCampaignId,
                };
                this.marketingHttpService.updateBusiBatchInfo(params).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
                });
                // 更新批次明细
                var parames = {
                    batchId: this.batchId,
                    secBatchId: this.secBatchId,
                    marketingCampaignId: this.marketingCampaignId,
                    marketStat: '02',
                    pushStat: '02',
                    pushTime: this.pushTime.substring(0, 8),
                };
                this.marketingHttpService.updateBusiBatchDetailInfo(parames).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        debugger;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
                });
            }
            this.confirmationService.confirm({
                message: '确定要提交吗?',
                accept: function () {
                    var arr = {};
                    var campaign_approveObj = {};
                    arr['marketingCampaignId'] = _this.marketingCampaignId;
                    arr['deId'] = _this.deId;
                    arr['marketingCampaigntType'] = _this.marketingCampaigntType;
                    _this.paramObj = {
                        bizType: '03',
                        bizPkFieldMap: arr,
                    };
                    _this.approveClick(_this.paramObj);
                }
            });
        }
    };
    //发布审批
    DirectReviewTree.prototype.approveClick = function (param) {
        var _this = this;
        this.cusOperationHttpService.custMarketWorkflowUnifiedEntrance(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                commonHeader['globalSeqNo'] = '';
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                _this.router.navigate(['/pages/tzb/custom/marketing/marketing-activite/marketing-activity-query', { marketingCampaigntType: _this.marketingCampaigntType }]);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    DirectReviewTree.prototype.outDisplayCall = function (event) {
        console.log(event);
        this.dealPerShow = event;
    };
    DirectReviewTree.prototype.outValueCall = function (event) {
        console.log(event);
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        console.log(commonHeader);
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.approveClick(this.paramObj);
    };
    //查询流水号
    DirectReviewTree.prototype.checkSerIal = function () {
        var _this = this;
        this.marketingHttpService.createGlobalSeqNo({}).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                commonHeader['globalSeqNo'] = data.globalSeqNo;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    // 根据营销活动编号更新营销活动相关信息
    DirectReviewTree.prototype.doSure = function (num) {
        var _this = this;
        if (num == '3') {
            this.bussinessMap.approve = '0';
            this.subApproveMapBean.result = '0';
        }
        else {
            this.bussinessMap.approve = '1';
            this.subApproveMapBean.result = '1';
        }
        var param = {
            marketingCampaignId: this.marketingCampaignId,
            campaignName: this.totalMessage.campaignName,
            statusId: num
        };
        this.marketingHttpService.updateMarketinggCampaignById(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.disposeSchedule();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    // 同意+否决
    DirectReviewTree.prototype.disposeSchedule = function () {
        var _this = this;
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.appproResultBean.bussinessMap = this.bussinessMap;
        this.appproResultBean.userId = this.userId;
        this.appproResultBean.approveMap = this.subApproveMapBean;
        this.appproResultBean.taskId = this.taskId;
        this.customCenterHttpService.bpmNextTask(this.appproResultBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                setTimeout(function () {
                    window.history.go(-1);
                }, 500);
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    DirectReviewTree = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'direct-review',
            template: __webpack_require__(/*! ./direct-review.html */ "./src/app/pages/tzb/custom/marketing/direct-review/direct-review.html"),
            styles: [__webpack_require__(/*! ./direct-review.scss */ "./src/app/pages/tzb/custom/marketing/direct-review/direct-review.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"], app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_pages_tzb_custom_marketing_http_marketing_http_service__WEBPACK_IMPORTED_MODULE_6__["MarketingHttpService"], app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_10__["CustomCenterHttpService"]]
        })
        /**
         * 直销复核界面
         */
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            app_pages_tzb_custom_marketing_http_marketing_http_service__WEBPACK_IMPORTED_MODULE_6__["MarketingHttpService"],
            app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_10__["CustomCenterHttpService"]])
    ], DirectReviewTree);
    return DirectReviewTree;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/http/marketing.constant.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/http/marketing.constant.ts ***!
  \***********************************************************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
var API = {
    createMarketingCampaignNew: 'createMarketingCampaignNew',
    createCampaignProduct: 'createCampaignProduct',
    createCampaignPromoteAndProduct: 'createCampaignPromoteAndProduct',
    createCampaignCust: 'createCampaignCust',
    createCampaignRequire: 'createCampaignRequire',
    createMarketingCampaignRole: 'createMarketingCampaignRole',
    custMarketWorkflowUnifiedEntrance: 'custMarketWorkflowUnifiedEntrance',
    queryMarketingCampaignById: 'queryMarketingCampaignById',
    createCampaignChannel: 'createCampaignChannel',
    findDocumentTemplate: 'findDocumentTemplate',
    documentDownload: 'documentDownload',
    queryCustomerByTopicId: 'queryCustomerByTopicId',
    doucumentDataDeal: 'doucumentDataDeal',
    findDocumentExamples: 'findDocumentExamples',
    queryCheckCustomer: 'queryCheckCustomer',
    updateCheckCustomer: 'updateCheckCustomer',
    delSelectCustomer: 'delSelectCustomer',
    queryPageControllerList: 'queryPageControllerList',
    getBigDataStatisticsList: 'getBigDataStatisticsList',
    getBigDataStatisticsDetail: 'getBigDataStatisticsDetail',
    queryPageControllerInfoById: 'queryPageControllerInfoById',
    createGlobalSeqNo: 'createGlobalSeqNo',
    campaignCustDataDelete: 'campaignCustDataDelete',
    queryRecommendProduct: 'queryRecommendProduct',
    updateBusiBatchInfo: 'updateBusiBatchInfo',
    updateBusiBatchDetailInfo: 'updateBusiBatchDetailInfo',
    updateCustProductData: 'updateCustProductData',
    updateMarketinggCampaignById: 'updateMarketinggCampaignById',
};


/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/http/marketing.http.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/http/marketing.http.service.ts ***!
  \***************************************************************************/
/*! exports provided: MarketingHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingHttpService", function() { return MarketingHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _marketing_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketing.constant */ "./src/app/pages/tzb/custom/marketing/http/marketing.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarketingHttpService = /** @class */ (function () {
    function MarketingHttpService(httpService) {
        this.httpService = httpService;
    }
    //基本要素
    MarketingHttpService.prototype.createMarketingCampaignNew = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createMarketingCampaignNew, params);
    };
    //营销产品创建
    MarketingHttpService.prototype.createCampaignProduct = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createCampaignProduct, params);
    };
    //促销手段
    MarketingHttpService.prototype.createCampaignPromoteAndProduct = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createCampaignPromoteAndProduct, params);
    };
    //营销对象
    MarketingHttpService.prototype.createCampaignCust = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createCampaignCust, params);
    };
    //营销要求
    MarketingHttpService.prototype.createCampaignRequire = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createCampaignRequire, params);
    };
    //角色创建
    MarketingHttpService.prototype.createMarketingCampaignRole = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createMarketingCampaignRole, params);
    };
    //发布
    MarketingHttpService.prototype.custMarketWorkflowUnifiedEntrance = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].custMarketWorkflowUnifiedEntrance, params);
    };
    //复制营销活动
    MarketingHttpService.prototype.queryMarketingCampaignById = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryMarketingCampaignById, params);
    };
    //营销渠道
    MarketingHttpService.prototype.createCampaignChannel = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createCampaignChannel, params);
    };
    //文件导入
    MarketingHttpService.prototype.findDocumentTemplate = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].findDocumentTemplate, params);
    };
    //模板下载
    MarketingHttpService.prototype.documentDownload = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].documentDownload, params);
    };
    MarketingHttpService.prototype.queryCustomerByTopicId = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCustomerByTopicId, params);
    };
    MarketingHttpService.prototype.doucumentDataDeal = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].doucumentDataDeal, params);
    };
    //查询实例列表
    MarketingHttpService.prototype.findDocumentExamples = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].findDocumentExamples, params);
    };
    MarketingHttpService.prototype.queryCheckCustomer = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCheckCustomer, params);
    };
    //更新已选择客户
    MarketingHttpService.prototype.updateCheckCustomer = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].updateCheckCustomer, params);
    };
    //删除已选择客户
    MarketingHttpService.prototype.delSelectCustomer = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].delSelectCustomer, params);
    };
    //页面配置
    MarketingHttpService.prototype.queryPageControllerList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageControllerList, params);
    };
    //大数据导入名单数据列表
    MarketingHttpService.prototype.getBigDataStatisticsList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].getBigDataStatisticsList, params);
    };
    //大数据导入名单详情
    MarketingHttpService.prototype.getBigDataStatisticsDetail = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].getBigDataStatisticsDetail, params);
    };
    MarketingHttpService.prototype.queryPageControllerInfoById = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS22"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageControllerInfoById, params);
    };
    MarketingHttpService.prototype.createGlobalSeqNo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS22"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createGlobalSeqNo, params);
    };
    MarketingHttpService.prototype.campaignCustDataDelete = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS22"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].campaignCustDataDelete, params);
    };
    MarketingHttpService.prototype.queryRecommendProduct = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryRecommendProduct, params);
    };
    //批次列表信息修改
    MarketingHttpService.prototype.updateBusiBatchInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].updateBusiBatchInfo, params);
    };
    //批次明细信息修改
    MarketingHttpService.prototype.updateBusiBatchDetailInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].updateBusiBatchDetailInfo, params);
    };
    MarketingHttpService.prototype.updateCustProductData = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].updateCustProductData, params);
    };
    // 营销活动复核
    MarketingHttpService.prototype.updateMarketinggCampaignById = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].updateMarketinggCampaignById, params);
    };
    MarketingHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], MarketingHttpService);
    return MarketingHttpService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing.module.ts ***!
  \****************************************************************/
/*! exports provided: MarketingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingModule", function() { return MarketingModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _marketing_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marketing.routing */ "./src/app/pages/tzb/custom/marketing/marketing.routing.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_pages_tzb_custom_marketing_direct_review_direct_review__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/marketing/direct-review/direct-review */ "./src/app/pages/tzb/custom/marketing/direct-review/direct-review.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author 洪满义
 * 2018-05-08
 */







var MarketingModule = /** @class */ (function () {
    function MarketingModule() {
    }
    MarketingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _marketing_routing__WEBPACK_IMPORTED_MODULE_4__["MarketingRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
            ],
            declarations: [
                app_pages_tzb_custom_marketing_direct_review_direct_review__WEBPACK_IMPORTED_MODULE_6__["DirectReviewTree"],
            ],
            providers: []
        })
    ], MarketingModule);
    return MarketingModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing.routing.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing.routing.ts ***!
  \*****************************************************************/
/*! exports provided: routes, MarketingRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingRouting", function() { return MarketingRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_marketing_direct_review_direct_review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/marketing/direct-review/direct-review */ "./src/app/pages/tzb/custom/marketing/direct-review/direct-review.ts");


var routes = [
    {
        path: '',
        children: [
            { path: 'marketing-project', loadChildren: './marketing-project/marketing-project.module#MarketProjectModule' },
            { path: 'marketing-activite', loadChildren: './marketing-activite/marketing-activite.module#MarketingActiviteModule' },
            { path: 'my-activite-project', loadChildren: './my-activite-project/my-activite-project.module#MyProjectModule' },
            { path: 'cust-query', loadChildren: './cust-query/cust-query.module#CustQueryModule' },
            { path: 'voucher', loadChildren: './voucher/voucher.module#VoucherModule' },
            { path: 'marketing-content-manage', loadChildren: './marketing-content-manage/marketing-content-manage.module#MarketingContentManageModule' },
            { path: 'direct-review', component: app_pages_tzb_custom_marketing_direct_review_direct_review__WEBPACK_IMPORTED_MODULE_1__["DirectReviewTree"] },
        ]
    }
];
var MarketingRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=marketing-marketing-module.js.map