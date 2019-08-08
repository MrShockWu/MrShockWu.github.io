(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~available-product-available-product-module~base-product-base-product-module~product-function~1b529e00"],{

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-config/base-product-config.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-config/base-product-config.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <ul class=\"ui-breadcrumb-new\">\r\n        <li class=\"active\">\r\n          <a>\r\n            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n        </li>\r\n        <li>\r\n          <a>产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>基础产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>基础产品新增</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 module\" style=\"margin: 10px 10px;\">\r\n    <div class=\"ui-g-12 ui-md-12\" id=\"KK\">\r\n      <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 form_item\">\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='0'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height:35px\">\r\n            <label>添加方式:</label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-10\">\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n              <p-radioButton (onClick)='choseAdd()' name=\"groupname\" value=\"val1\" label=\"手工添加\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n              <p-radioButton (onClick)='choseAdd()' name=\"addName\" value=\"copyAdd\" label=\"复制添加\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n              <input type=\"text\" placeholder=\"请选择所复制基础产品\" disabled [(ngModel)]=\"copybaseName\" pInputText class=\"ui-inputtext-new\" style=\"width:24%\">\r\n              <div style=\"width: 90px;display: inline-block;\" *ngIf=\"!copyValue\">\r\n                <div class=\"ui-btn1-div\">\r\n                  <p class=\"place-div first\"></p>\r\n                  <p class=\"place-div last\"></p>\r\n                  <button pButton type=\"button\" (click)=\"choiceTemplate()\" label=\"选择\" style=\"width: 60px;\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"ui-g-12 ui-md-6\">\r\n            <p-radioButton (onClick)='choseAdd()' name=\"addName\" value=\"copyAdd\" label=\"复制添加\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n            <input type=\"text\" placeholder=\"请选择所复制基础产品\" disabled [(ngModel)]=\"copybaseName\" pInputText class=\"ui-inputtext-new\" style=\"width:24%\">\r\n            <div style=\"width: 90px;display: inline-block;\" *ngIf=\"!copyValue\">\r\n              <div class=\"ui-btn1-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton type=\"button\" (click)=\"choiceTemplate()\" label=\"选择\" style=\"width: 60px;\"></button>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height:35px\">\r\n                <span appValidation>产品线:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-4\" *ngIf=\"selectedValue=='val1'\">\r\n                <div style=\"width:38%;\">\r\n                  <p-dropdown styleClass=\"ui-dropdown-new\" name=\"line_value\" formControlName=\"line_value\" (onChange)=\"lineVelue()\" [(ngModel)]=\"line_value\"\r\n                    [options]=\"select_line\"></p-dropdown>\r\n                  <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['line_value'].valid&&userform.controls['line_value'].dirty\">\r\n                    请选择产品线！\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-4\" *ngIf=\"selectedValue=='copyAdd'\">\r\n                <div style=\"width:38%;\">\r\n                  <p-dropdown styleClass=\"ui-dropdown-new\" name=\"line_value\" [disabled]='true' formControlName=\"line_value\" (onChange)=\"lineVelue()\"\r\n                    [(ngModel)]=\"line_value\" [options]=\"select_line\"></p-dropdown>\r\n                  <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['line_value'].valid&&userform.controls['line_value'].dirty\">\r\n                    请选择产品线！\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-1 form_item_label\" style=\"line-height:35px\">\r\n                <span appValidation>产品组:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-5\">\r\n                <div style=\"width:34%;\">\r\n                  <p-dropdown styleClass=\"ui-dropdown-new\" name=\"group_value\" formControlName=\"group_value\" [(ngModel)]=\"group_value\" (onChange)=\"group_change()\"\r\n                    [options]=\"select_group\"></p-dropdown>\r\n                  <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['group_value'].valid&&userform.controls['group_value'].dirty\">\r\n                    请选择产品组！\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 35px\">\r\n                <span appValidation>基础产品编号:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-4\">\r\n                <input style=\"width:14%;text-align: center;min-width: 90px;\" type=\"text\" name=\"baseProductIdhead\" readonly pInputText class=\"ui-inputtext-new\"\r\n                  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"baseProductIdhead\" />\r\n                <input style=\"width: 21.5%;text-align: center;min-width: 100px;\" type=\"text\" name=\"baseProductId\" pInputText class=\"ui-inputtext-new\"\r\n                  maxlength=\"4\" formControlName=\"baseProductId\" [(ngModel)]=\"baseProductId\" />\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['baseProductId'].valid&&userform.controls['baseProductId'].dirty\">\r\n                  <span [hidden]=\"!userform.hasError('pattern','baseProductId')\"> 基础产品编号只可输入数字！</span>\r\n                <span [hidden]=\"!userform.hasError('required','baseProductId')\"> 请填写基础产品编号！</span>\r\n                </span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-1  form_item_label\" style=\"line-height:35px\">\r\n                <span appValidation>基础产品名称:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-5\">\r\n                <input type=\"text\" name=\"productName\" maxlength=\"60\" formControlName=\"productName\" [(ngModel)]=\"bpcBean.productName\" pInputText\r\n                  class=\"ui-inputtext-new\" style=\"width: 34%;\">\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['productName'].valid&&userform.controls['productName'].dirty\">\r\n                  <span [hidden]=\"!userform.hasError('pattern','productName')\"> 基础产品名称输入不合法，不可输入空格或者特殊字符！</span>\r\n                <span [hidden]=\"!userform.hasError('required','productName')\"> 请填写基础产品名称！</span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"height: 40px;line-height: 40px\">\r\n                <span>基础产品描述:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-10\">\r\n                <textarea name=\"description\" pInputTextarea class=\"ui-inputtextarea-new\" formControlName=\"description\" maxlength=\"200\" [(ngModel)]=\"bpcBean.description\"\r\n                  pInputTextarea class=\"ui-inputtextarea-new\" style=\"width:67.5%\"></textarea>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='1'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-5\">\r\n              <div class=\"ui-g-12 ui-md-12\">\r\n                <div class=\"ui-g-12 ui-md-2  form_item_label\" style=\"line-height:30px\">\r\n                  <span>组件编号:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                  <input type=\"text\" [(ngModel)]=\"componentViewBean.productFeatureCategoryId\" pInputText class=\"ui-inputtext-new\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2  form_item_label\" style=\"line-height:30px\">\r\n                  <span>组件名称:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                  <input type=\"text\" [(ngModel)]=\"componentViewBean.description\" pInputText class=\"ui-inputtext-new\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2  text_right\">\r\n                  <div style=\"width: 90px;display: inline-block;\">\r\n                    <div class=\"ui-btn1-div\">\r\n                      <p class=\"place-div first\"></p>\r\n                      <p class=\"place-div last\"></p>\r\n                      <button pButton type=\"button\" (click)=\"componentQuery()\" label=\"查询\" style=\"width: 60px;\"></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-7\">\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-5\" style=\"border: 1px solid #34cfe6;\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h3 class=\"hcolor\">|&nbsp;可选组件列表</h3>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <u-dataTable [value]=\"cars_left\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                <p-column [style]=\"{'text-align':'center'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <p-checkbox label=\"全选\" [(ngModel)]=\"valueListOneAll\" binary=\"false\" (click)=\"AllChooseZ()\"></p-checkbox>\r\n                  </ng-template>\r\n                  <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox (click)=\"AllChooseZd()\" [(ngModel)]=\"valueListOne\" value=\"{{ri}}\" name=\"aa\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column *ngFor=\"let col of arr_4\" [field]=\"col.label\" [header]=\"col.ch\" [style]=\"{'text-align':'center'}\"></p-column>\r\n              </u-dataTable>\r\n              <div style=\"float:right;margin:10px 10px\">\r\n                <u-paginator rows=\"{{componentViewBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                  (onPageChange)=\"paginate($event)\"></u-paginator>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 text_center\">\r\n            <div style=\"width: 90px;display: inline-block;\" class=\"margin_top_one\">\r\n              <div class=\"ui-btn2-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton (click)=\"rightMovre()\" type=\"button\" label=\">>\" style=\"width: 60px;\"></button>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div style=\"width: 90px;display: inline-block;\" class=\"margin_top_two\">\r\n              <div class=\"ui-btn2-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton (click)=\"liftMovre()\" type=\"button\" label=\"<<\" style=\"width: 60px;\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-5\" style=\"border: 1px solid #34cfe6;\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h3 class=\"hcolor\">|&nbsp;已选组件列表</h3>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <u-dataTable [value]=\"cars_rightlist\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                <p-column [style]=\"{'text-align':'center'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <p-checkbox name=\"check2\" value=\"check2\" label=\"全选\" [(ngModel)]=\"checkclicke\" binary=\"false\" (click)=\"checkclickes()\"></p-checkbox>\r\n                  </ng-template>\r\n                  <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"valueListTwo\" value=\"{{ri}}\" name=\"aa\" (click)=\"checkclickese()\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column *ngFor=\"let col of arr_5\" [field]=\"col.label\" [header]=\"col.ch\" [style]=\"{'text-align':'center'}\"></p-column>\r\n              </u-dataTable>\r\n              <div style=\"float:right;margin:10px 10px\">\r\n                <u-paginator [first]=\"firsts\" rows=\"{{pageSizes}}\" totalRecords=\"{{totals}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10]\"\r\n                  (onPageChange)=\"paginates($event)\"></u-paginator>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='2'\">\r\n        <div class=\"ui-g-12 ui-md-12 padding_zero boxAll\">\r\n          <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpen == 'down'}\">\r\n            <div class=\"un_active\" *ngFor=\"let col of resultListAll;let i = index\" (click)=\"resultClick(i,col)\" [ngClass]=\"{'active':showClass == col.description}\">\r\n              {{col.description}}\r\n              <span class=\"dline\"></span>\r\n            </div>\r\n          </div>\r\n          <div (click)=\"openClick()\" class=\"boxTwo text_center\">\r\n            <span *ngIf=\"vlaueOpen=='open'\">展开</span>\r\n            <span *ngIf=\"vlaueOpen=='down'\">收起</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 padding_zero\" *ngFor=\"let col of resultListAll;let i = index\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12\" *ngIf=\"i==aIndex\">\r\n              <u-dataTable [value]=\"resultListDetail\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkBoxAll10\" binary=\"false\" (click)=\"checkBoxAllClick10()\"></p-checkbox>\r\n                  </ng-template>\r\n                  <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"col.checkBox10\" (click)=\"checkBoxClick10(ri,col)\" binary=\"true\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center' ,'width':'16%'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>配置级别</label>\r\n                  </ng-template>\r\n                  <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-dropdown styleClass=\"ui-dropdown-new\" (onChange)=\"peizhi(item)\" [(ngModel)]=\"item.configLevelValue\" [options]=\"configLevel\"></p-dropdown>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center' ,'width':'16%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center' ,'width':'16%'}\" field=\"description\" header=\"属性名称\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'80px'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>全选</label>\r\n                  </ng-template>\r\n                  <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div *ngIf=\"item.featureType =='01'\">\r\n                      <p-checkbox [(ngModel)]=\"item['checkDate']\" binary=\"false\" (click)=\"checkAllClickA(item)\"></p-checkbox>\r\n                    </div>\r\n                    <div *ngIf=\"item.featureType =='02'\">\r\n                    </div>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column>\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>取值范围</label>\r\n                  </ng-template>\r\n                  <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div *ngIf=\"item.featureType =='01'\" class=\"text_left\">\r\n                      <div *ngFor=\"let items of item.productFeatures;let ss = index\" style=\"display:inline-block\">\r\n                        <p-checkbox value=\"items.productFeatureId\" [label]=\"items.description\" [(ngModel)]=\"items.checkBox\" (click)=\"checkBoxClickA(ss,items,item)\"\r\n                          binary=\"true\"></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"item.featureType =='02'\" class=\"text_left\">\r\n                      <div *ngFor=\"let items of item.productFeatures\">\r\n                        <div *ngIf=\"items.valueType =='06'&&item.configLevelValue=='0'\">\r\n                          <input (ngModelChange)=\"changeValue(item)\" type=\"number\" [(ngModel)]=\"items.def\" pInputText style=\"width:45%\">\r\n                          <span>(</span>\r\n                          <span>{{items.min}}</span>\r\n                          <span>--</span>\r\n                          <span>{{items.max}}</span>\r\n                          <span>)</span>\r\n                        </div>\r\n                        <div *ngIf=\"items.valueType =='06'&&item.configLevelValue=='1'\">\r\n                          <input (ngModelChange)=\"changeValue(item)\" type=\"number\" [(ngModel)]=\"items.min\" pInputText style=\"width:45%\"> --\r\n                          <input (ngModelChange)=\"changeValue(item)\" type=\"number\" [(ngModel)]=\"items.max\" pInputText style=\"width:45%\">\r\n                        </div>\r\n                        <div *ngIf=\"items.valueType =='06'&&item.configLevelValue=='2'\">\r\n                          <span>数值后确定型不可选为客户级</span>\r\n                        </div>\r\n                        <div *ngIf=\"items.valueType =='05'\">\r\n                          <input (ngModelChange)=\"changeValue(item)\" type=\"text\" [(ngModel)]=\"items.def\" pInputText style=\"width:45%\">\r\n                        </div>\r\n                        <div *ngIf=\"items.valueType !='05'&&items.valueType !='06'\">\r\n                          <input (ngModelChange)=\"changeValue(item)\" type=\"number\" [(ngModel)]=\"items.min\" pInputText style=\"width:45%\"> --\r\n                          <input (ngModelChange)=\"changeValue(item)\" type=\"number\" [(ngModel)]=\"items.max\" pInputText style=\"width:45%\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                </p-column>\r\n              </u-dataTable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='3'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-5\">\r\n              <div class=\"ui-g-12 ui-md-12\">\r\n                <div class=\"ui-g-12 ui-md-2 text_right\" style=\"height: 40px;line-height: 30px\">\r\n                  <span>功能编号:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                  <input type=\"text\" [(ngModel)]=\"pfcBean.productFunctionId\" pInputText class=\"ui-inputtext-new\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2 text_right\" style=\"height: 40px;line-height: 30px\">\r\n                  <span>功能名称:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                  <input type=\"text\" [(ngModel)]=\"pfcBean.productFunctionName\" pInputText class=\"ui-inputtext-new\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2  text_right\">\r\n                  <div style=\"width: 90px;display: inline-block;\">\r\n                    <div class=\"ui-btn1-div\">\r\n                      <p class=\"place-div first\"></p>\r\n                      <p class=\"place-div last\"></p>\r\n                      <button pButton type=\"button\" (click)=\"funQuery()\" label=\"查询\" style=\"width: 60px;\"></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-7\">\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-5\" style=\"border: 1px solid #34cfe6;\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h3 class=\"hcolor\">|&nbsp;可选功能列表</h3>\r\n              <!-- <img src=\"assets/layout/images/titYJ.png\" /> -->\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <u-dataTable [value]=\"funList_left\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                <p-column [style]=\"{'text-align':'center'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>选择</label>\r\n                  </ng-template>\r\n                  <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"leftListFun\" value=\"{{ri}}\" name=\"bb\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionId\" header=\"功能编号\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                </p-column>\r\n              </u-dataTable>\r\n              <div style=\"float:right;margin:10px 10px\">\r\n                <u-paginator rows=\"{{pfcBean.pageSize}}\" totalRecords=\"{{totalFun}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                  (onPageChange)=\"paginateFun($event)\"></u-paginator>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 text_center\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h4> </h4>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div style=\"width: 90px;display: inline-block;\" class=\"margin_top_one\">\r\n                <div class=\"ui-btn2-div\">\r\n                  <p class=\"place-div first\"></p>\r\n                  <p class=\"place-div last\"></p>\r\n                  <button pButton (click)=\"rightFunMovre()\" type=\"button\" label=\">>\" style=\"width: 60px;\"></button>\r\n                </div>\r\n              </div>\r\n              <br>\r\n              <div style=\"width: 90px;display: inline-block;\" class=\"margin_top_two\">\r\n                <div class=\"ui-btn2-div\">\r\n                  <p class=\"place-div first\"></p>\r\n                  <p class=\"place-div last\"></p>\r\n                  <button pButton (click)=\"liftFunMovre()\" type=\"button\" label=\"<<\" style=\"width: 60px;\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\" style=\"border: 1px solid #34cfe6;\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h3 class=\"hcolor\">|&nbsp;已选功能列表</h3>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <u-dataTable [value]=\"funList_rightlist\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                <p-column [style]=\"{'text-align':'center'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>选择</label>\r\n                  </ng-template>\r\n                  <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"rightListFun\" value=\"{{ri}}\" name=\"cc\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                </p-column>\r\n              </u-dataTable>\r\n              <div style=\"float:right;margin:10px 10px\">\r\n                <u-paginator [first]=\"firstg\" rows=\"{{pageSizeg}}\" totalRecords=\"{{totalg}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10]\"\r\n                  (onPageChange)=\"paginateg($event)\"></u-paginator>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='4'\">\r\n        <div class=\"ui-g-12 ui-md-12 padding_zero boxAll\">\r\n          <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpenf == 'down'}\">\r\n            <div class=\"un_active\" *ngFor=\"let col of fucntionContentList;let i = index\" (click)=\"resultfClick(i,col,'pay')\" [ngClass]=\"{'active':shows == col.functionName}\">\r\n              {{col.functionName}}\r\n              <span class=\"dline\"></span>\r\n            </div>\r\n          </div>\r\n          <div (click)=\"openClickf()\" class=\"boxTwo text_center\">\r\n            <span *ngIf=\"vlaueOpenf=='open'\">展开</span>\r\n            <span *ngIf=\"vlaueOpenf=='down'\">收起</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-12\" style=\"background-color: #e8e8e8;margin: 10px 0;\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h3 class=\"hcolor\">|&nbsp;可选支付工具</h3>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"un_method\" *ngFor=\"let col of paymentMethodList;let i = index\" (click)=\"paymentMethodClick(i,col)\" [ngClass]=\"{'method':col.show == 'Y'}\">\r\n                {{col.paymentMethodTypeName}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\" style=\"background-color: #e8e8e8;margin: 10px 0;\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h3 class=\"hcolor\">|&nbsp;交付服务</h3>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-9\">\r\n              <div class=\"ui-g-12 ui-md-1 form_item_label\" style=\"line-height: 30px;\">\r\n                <span>交付服务类型:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <p-dropdown styleClass=\"ui-dropdown-new\" [(ngModel)]=\"productContentTypeId\" [options]=\"resultListAllse\"></p-dropdown>\r\n              </div>\r\n              <form [formGroup]=\"userformT\">\r\n                <div class=\"ui-g-12 ui-md-1 form_item_label\" style=\"line-height: 30px;\">\r\n                  <span>交付服务名称:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                  <input type=\"text\" maxlength=\"60\" [(ngModel)]=\"contentName\" formControlName=\"contentName\" name=\"contentName\" pInputText class=\"ui-inputtext-new\">\r\n                  <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformT.controls['contentName'].valid&&userformT.controls['contentName'].dirty\">\r\n                    <span [hidden]=\"!userformT.hasError('pattern','contentName')\">输入不合法，交付服务名称只能是英文！</span>\r\n                  </span>\r\n                </div>\r\n              </form>\r\n              <div class=\"ui-g-12 ui-md-1 form_item_label\" style=\"line-height: 30px;\">\r\n                <span>生效时间:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <p-calendar styleClass=\"ui-calendar-new\" (onSelect)=\"refresh()\" [(ngModel)]=\"fromDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                  yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\"\r\n                  [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-1 form_item_label\" style=\"line-height: 30px;\">\r\n                <span>失效时间:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <p-calendar styleClass=\"ui-calendar-new\" *ngIf=\"showFlag\" [(ngModel)]=\"thruDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                  yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\"\r\n                  [showIcon]=\"true\" [locale]=\"ch\" [minDate]=\"fromDate\">\r\n                </p-calendar>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-3\" style=\"margin-top: 8px;\">\r\n              <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn1-div\">\r\n                  <p class=\"place-div first\"></p>\r\n                  <p class=\"place-div last\"></p>\r\n                  <button (click)=\"addpaytool()\" pButton type=\"button\" label=\"添加\" style=\"width: 60px;\"></button>\r\n                </div>\r\n              </div>\r\n              <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn2-div\">\r\n                  <p class=\"place-div first\"></p>\r\n                  <p class=\"place-div last\"></p>\r\n                  <button (click)=\"modifypaytool()\" pButton type=\"button\" label=\"修改\" style=\"width: 60px;\"></button>\r\n                </div>\r\n              </div>\r\n              <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn2-div\">\r\n                  <p class=\"place-div first\"></p>\r\n                  <p class=\"place-div last\"></p>\r\n                  <button (click)=\"delpaytool()\" pButton type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <u-dataTable [value]=\"cars_paytool\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\" selectionMode=\"single\" [(selection)]=\"selectedCar\"\r\n                (onRowSelect)=\"handRowSelect($event)\">\r\n                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productContentTypeId\" header=\"交付服务类型\">\r\n                  <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.productContentTypeId|codeValuePie:resultListAllse}}\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"contentName\" header=\"交付服务名称\"></p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"fromDate\" header=\"生效时间\"></p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"thruDate\" header=\"失效时间\"></p-column>\r\n              </u-dataTable>\r\n              <!-- <div style=\"float:right;margin:10px 10px\">\r\n                  <u-paginator rows=\"{{componentViewBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                  (onPageChange)=\"paginate($event)\"></u-paginator>\r\n                </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='5'\">\r\n        <div class=\"ui-g-12 ui-md-12 padding_zero boxAll\">\r\n          <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpenf == 'down'}\">\r\n            <div class=\"un_active\" *ngFor=\"let col of fucntionContentList;let i = index\" (click)=\"resultfClick(i,col,'survey')\" [ngClass]=\"{'active':shows == col.functionName}\">\r\n              {{col.functionName}}\r\n              <span class=\"dline\"></span>\r\n            </div>\r\n          </div>\r\n          <div (click)=\"openClickf()\" class=\"boxTwo text_center\">\r\n            <span *ngIf=\"vlaueOpenf=='open'\">展开</span>\r\n            <span *ngIf=\"vlaueOpenf=='down'\">收起</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-12 text_right\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n              <div class=\"ui-btn1-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <span (click)=\"addintelmation()\" pButton type=\"button\" label=\"新增\" style=\"width: 60px;\"></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <u-dataTable [value]=\"surveyApplTypeList\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n              <!-- <p-column [style]=\"{'text-align':'center'}\" field=\"categoryName\" header=\"属性分类\"></p-column> -->\r\n              <p-column [style]=\"{'text-align':'center','width':'16%'}\" field=\"surveyOptionType\" header=\"属性值类型\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.surveyOptionType|codeValuePie:QuestionLists}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'16%'}\" field=\"surveyOptionName\" header=\"属性名称\"></p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'16%'}\" field=\"surveyOptionDesc\" header=\"属性描述\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                  <span *ngIf=\"item.surveyOptionDesc && item.surveyOptionDesc.length>15\">{{item.surveyOptionDesc.substring(0,15)}}...</span>\r\n                  <span *ngIf=\"item.surveyOptionDesc && item.surveyOptionDesc.length<16\">{{item.surveyOptionDesc}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'16%'}\" field=\"requiredField\" header=\"必输\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.requiredField|codeValuePie:isMybankCust}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'16%'}\" field=\"pageNum\" header=\"属性分页\"></p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'20%'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                  <label>操作</label>\r\n                </ng-template>\r\n                <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  <span class=\"icon iconfont\" pTooltip=\"删除\" tooltipPosition=\"top\" (click)=\"deleteClick(item)\" style=\"color:#fe5a48;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe673;</span>\r\n                </ng-template>\r\n              </p-column>\r\n            </u-dataTable>\r\n            <!-- <div style=\"float:right;margin:10px 10px\">\r\n                <u-paginator rows=\"{{componentViewBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                  (onPageChange)=\"paginate($event)\"></u-paginator>\r\n              </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\" *ngIf=\"vlaue1=='6'\">\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <b> 此基础产品不允许修改组件及功能</b>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 ui-md-12 text_center\">\r\n    <div style=\"width: 90px;display: inline-block;\">\r\n      <div class=\"ui-btn2-div\">\r\n        <p class=\"place-div first\"></p>\r\n        <p class=\"place-div last\"></p>\r\n        <button pButton (click)=\"goBack()\" type=\"button\" label=\"返回\" style=\"width: 60px;\"></button>\r\n      </div>\r\n    </div>\r\n    <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1!='0'\">\r\n      <div class=\"ui-btn2-div\">\r\n        <p class=\"place-div first\"></p>\r\n        <p class=\"place-div last\"></p>\r\n        <button pButton type=\"button\" (click)=\"prev()\" label=\"上一步\" style=\"width: 60px;\"></button>\r\n      </div>\r\n    </div>\r\n    <div style=\"width: 90px;display: inline-block;color:#fff\" *ngIf=\"vlaue1!='5'\">\r\n      <div class=\"ui-btn1-div\">\r\n        <p class=\"place-div first\"></p>\r\n        <p class=\"place-div last\"></p>\r\n        <button pButton type=\"button\" (click)=\"next()\" label=\"下一步\" style=\"width: 60px;\"></button>\r\n      </div>\r\n    </div>\r\n    <span>&nbsp;</span>\r\n    <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1=='5'\">\r\n      <!-- <div class=\"ui-btn2-div\">\r\n        <p class=\"place-div first\"></p>\r\n        <p class=\"place-div last\"></p>\r\n        <button pButton type=\"button\" [disabled]='isComplete' (click)=\"severClick()\" label=\"保存\" style=\"width: 60px;\"></button>\r\n      </div> -->\r\n      <button pButton type=\"button\" [disabled]='isComplete' (click)=\"severClick()\" label=\"保存\" class=\"uButton\" style=\"width: 85px;height: 30px;\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <app-choose-copy-adds *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"choiceTemplateCall($event)\"></app-choose-copy-adds>\r\n  </div>\r\n  <app-surveyApplTypeList-add *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"addintelmationCall($event)\"></app-surveyApplTypeList-add>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-config/base-product-config.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-config/base-product-config.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .padding_zero {\n  padding: 0; }\n\n.container .boxAll {\n  position: relative;\n  clear: both;\n  width: 100%;\n  background-color: #19b0c8; }\n\n.container .boxOne {\n  float: left;\n  width: 90%; }\n\n.container .boxTwo {\n  float: left;\n  width: 10%;\n  padding: 10px 0; }\n\n.container .heTwo {\n  height: 40px;\n  overflow: hidden; }\n\n.container .heOne {\n  height: 100%; }\n\n.container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .text_right label {\n    font-weight: bold; }\n\n.container .text_left {\n  text-align: left; }\n\n.container .ul_box ul li {\n  list-style-type: none; }\n\n.container .margin_top_one {\n  margin-top: 12rem; }\n\n.container .margin_top_two {\n  margin-top: 2rem; }\n\n.container .border_blue {\n  border: 2px solid #0094D2; }\n\n.container .span_button {\n  text-align: center;\n  padding: 16px;\n  background-color: #0094D2;\n  border-radius: 6px; }\n\n.container .un_active {\n  display: inline-block;\n  height: 14px;\n  padding: 13px 16px;\n  border: none !important;\n  color: white;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px;\n  position: relative; }\n\n.container .active {\n  position: relative;\n  background-color: #E9F2F6;\n  color: #19b0c8; }\n\n.container .active .dline {\n    position: absolute;\n    left: 20%;\n    bottom: 0;\n    background-color: #19b0c8;\n    width: 56%;\n    height: 2px; }\n\n.container .un_method {\n  display: inline-block;\n  height: 14px;\n  padding: 10px 30px;\n  border: 1px solid #19b0c8;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px;\n  margin: 5px 20px;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.container .method {\n  color: white;\n  background-color: #19b0c8;\n  outline: none;\n  display: inline-block;\n  height: 14px;\n  padding: 10px 30px;\n  border: none !important;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px;\n  margin: 5px 20px;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n:host/deep/ .ui-steps-item:first-child {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(2) {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(3) {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(4) {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(5) {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps.ui-steps-readonly .ui-steps-item {\n  background-color: #fafafa; }\n\n:host/deep/ .ui-widget:disabled {\n  background-color: #ddd;\n  color: #909090; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-steps-item:first-child {\n    width: 28%; }\n  :host/deep/ .ui-steps-item:nth-last-child(2) {\n    width: 28%; }\n  :host/deep/ .ui-steps-item:nth-last-child(3) {\n    width: 28%; } }\n\n.radiocolor,\n.hcolor {\n  color: #19b0c8; }\n\n.forcolor {\n  background-color: #19b0c8; }\n\n.overflow {\n  max-height: 500px;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 60% !important;\n  min-height: 600px !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2Jhc2UtcHJvZHVjdC9iYXNlLXByb2R1Y3QtY29uZmlnL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHByb2R1Y3QtbWFuYWdlXFxiYXNlLXByb2R1Y3RcXGJhc2UtcHJvZHVjdC1jb25maWdcXGJhc2UtcHJvZHVjdC1jb25maWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxVQUFVLEVBQUE7O0FBRmxCO0VBS1Esa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBUmpDO0VBV1EsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFabEI7RUFlUSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFqQnZCO0VBb0JRLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFyQnhCO0VBd0JRLFlBQVksRUFBQTs7QUF4QnBCO0VBMkJRLGtCQUFrQixFQUFBOztBQTNCMUI7RUE4QlEsaUJBQWlCLEVBQUE7O0FBOUJ6QjtJQWdDWSxpQkFBaUIsRUFBQTs7QUFoQzdCO0VBb0NRLGdCQUFnQixFQUFBOztBQXBDeEI7RUF1Q1EscUJBQXFCLEVBQUE7O0FBdkM3QjtFQTBDUSxpQkFBaUIsRUFBQTs7QUExQ3pCO0VBNkNRLGdCQUFnQixFQUFBOztBQTdDeEI7RUFnRFEseUJBQXlCLEVBQUE7O0FBaERqQztFQW1EUSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUF0RDFCO0VBeURRLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQWxFMUI7RUFxRVEsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBdkV0QjtJQXlFWSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVcsRUFBQTs7QUE5RXZCO0VBa0ZRLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUEzRnZCO0VBOEZRLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUExR3ZCO0VBNkdRLHlCQUF5QixFQUFBOztBQUlqQztFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSztJQUNHLFVBQVUsRUFBQTtFQUViO0lBQ0csVUFBVSxFQUFBO0VBRWI7SUFDRyxVQUFVLEVBQUEsRUFDYjs7QUFHTDs7RUFFSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFHUSx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUE7O0FBSWhDO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2Jhc2UtcHJvZHVjdC9iYXNlLXByb2R1Y3QtY29uZmlnL2Jhc2UtcHJvZHVjdC1jb25maWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIC5wYWRkaW5nX3plcm8ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuYm94QWxsIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgIH1cclxuICAgIC5ib3hPbmUge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAuYm94VHdvIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIH1cclxuICAgIC5oZVR3byB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuaGVPbmUge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC50ZXh0X2NlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRleHRfbGVmdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC51bF9ib3ggdWwgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tYXJnaW5fdG9wX29uZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJyZW07XHJcbiAgICB9XHJcbiAgICAubWFyZ2luX3RvcF90d28ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyX2JsdWUge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDk0RDI7XHJcbiAgICB9XHJcbiAgICAuc3Bhbl9idXR0b24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk0RDI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgfVxyXG4gICAgLnVuX2FjdGl2ZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiAxM3B4IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUYyRjY7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgLmRsaW5lIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICAgICAgd2lkdGg6IDU2JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVuX21ldGhvZCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE5YjBjODtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW46IDVweCAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubWV0aG9kIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICA6aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDE2LjUlO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpudGgtbGFzdC1jaGlsZCgyKSB7XHJcbiAgICB3aWR0aDogMTYuNSU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOm50aC1sYXN0LWNoaWxkKDMpIHtcclxuICAgIHdpZHRoOiAxNi41JTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoNCkge1xyXG4gICAgd2lkdGg6IDE2LjUlO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpudGgtbGFzdC1jaGlsZCg1KSB7XHJcbiAgICB3aWR0aDogMTYuNSU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zdGVwcy51aS1zdGVwcy1yZWFkb25seSAudWktc3RlcHMtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktd2lkZ2V0OmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogIzkwOTA5MDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICA6aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDI4JTtcclxuICAgIH1cclxuICAgICA6aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpudGgtbGFzdC1jaGlsZCgyKSB7XHJcbiAgICAgICAgd2lkdGg6IDI4JTtcclxuICAgIH1cclxuICAgICA6aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpudGgtbGFzdC1jaGlsZCgzKSB7XHJcbiAgICAgICAgd2lkdGg6IDI4JTtcclxuICAgIH1cclxufVxyXG5cclxuLnJhZGlvY29sb3IsXHJcbi5oY29sb3Ige1xyXG4gICAgY29sb3I6ICMxOWIwYzg7XHJcbn1cclxuXHJcbi5mb3Jjb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG59XHJcblxyXG4ub3ZlcmZsb3cge1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS1kYXRhIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkN2Q3ZDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgLmFjdGl2ZSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4gOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgbGkgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-config/base-product-config.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-config/base-product-config.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: BaseProductConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseProductConfigComponent", function() { return BaseProductConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _bean_base_product_config_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/base-product-config.bean */ "./src/app/pages/tzb/product-manage/base-product/base-product-config/bean/base-product-config.bean.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








 //中文
var BaseProductConfigComponent = /** @class */ (function () {
    function BaseProductConfigComponent(productManageHttpService, router, commfunc, fb, activatedRoute, confirmationService) {
        this.productManageHttpService = productManageHttpService;
        this.router = router;
        this.commfunc = commfunc;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.confirmationService = confirmationService;
        // 组件右侧分页
        this.cars_rightlist = [];
        this.firsts = 1;
        this.totals = 0;
        this.pageSizes = 10;
        this.checkclicke = false; //是否全选(右)
        // 功能右侧分页
        this.funList_rightlist = [];
        this.firstg = 1;
        this.totalg = 0;
        this.pageSizeg = 10;
        //
        this.vlaueOpen = 'open';
        this.vlaueOpenf = 'open';
        this.copyValue = true;
        this.chooseComFlogAll = true;
        this.chooseComFlog = true;
        this.isComplete = false; //完成提交
        // isSerrve: Boolean = false;
        this.isGroupQuery = false; // 复制添加产品组
        this.isGroupQueryV = ''; // 暂存产品组ID
        this.isDianjiLast = false; // 默认点击最后一次
        this.isCopyBase = false;
        this.isDianji = false; // 判断
        this.cars_attrbute_query = [];
        this.componentFlag = true;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["tableMessage"]; // 列表无数据
        this.zzi_id = '-1'; // 暂记值
        this.odd = 0;
        this.cars_right_old = []; //
        // 控制日历刷新
        this.showFlag = true;
        // 日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["CALENDAR_CN"]; // 讲英文转化为中文
        this.fromDate = null; // 引入日期
        this.thruDate = null; // 引入日期
        this.display = false;
        // 组件的参数
        this.updateValue = [];
        this.pfcBean = new _bean_base_product_config_bean__WEBPACK_IMPORTED_MODULE_5__["ProductFunctionBean"](); // 产品功能
        this.bpcBean = new _bean_base_product_config_bean__WEBPACK_IMPORTED_MODULE_5__["BpcBean"]();
        this.componentViewBean = new _bean_base_product_config_bean__WEBPACK_IMPORTED_MODULE_5__["ComponentViewBean"]();
        // 提示信息
        this.msgs = [];
        // 头部
        this.head_title = '基础产品配置新增';
        this.select_2 = []; // 默认下拉
        this.select_line = []; // 产品线下拉
        this.select_group = []; // 产品组下拉
        this.tabViewIndex = 0; // 组件选项卡
        this.cars_left = []; // 组件数据-左（未选）
        this.cars_right = []; // 组件数据-右（未选）
        this.activeIndex = 0;
        // 分页
        this.pageSize = 10;
        this.pageNum = 1;
        // 树结构（假数据）
        this.arr_1 = [
            {
                label: '贷款',
                value: {
                    proId: '2',
                    proName: 'name1'
                },
            },
            {
                label: '村款',
                value: {
                    proId: '3',
                    proName: 'name2'
                }
            },
            {
                label: 'ftp',
                value: {
                    proId: '4',
                    proName: 'name3'
                }
            },
        ];
        this.arr_2 = [];
        this.arr_3 = [];
        this.infoList = [];
        this.valueListOne = [];
        this.valueListTwo = [];
        this.comType = []; // 组件状态是否为必选
        // 组件数据-左（未选）
        this.arr_4 = [
            {
                ch: '组件编号',
                label: 'productFeatureCategoryId',
                isShow: true
            },
            {
                ch: '组件名称',
                label: 'description',
                isShow: true
            },
        ];
        // 组件数据-右（未选）
        this.arr_5 = [
            {
                ch: '组件名称',
                label: 'description',
                isShow: true
            },
        ];
        // 组件
        this.aIndex = 0;
        this.cars_attrbute = []; // 属性列表
        this.attrbute_V = []; // 属性列表
        this.select_atr = []; // 属性选择
        this.attrValue = []; // 属性值
        this.attrValueId = []; // 属性值ID(HOUTAI sb)
        this.zujianId = '-1'; // 接受点击的组件ID
        // 功能
        this.funList_left = []; // 左选择框
        this.funList_right = []; // 右选择框
        this.leftListFun = []; // 左列表
        this.rightListFun = []; // 右列表
        this.funList_right_old = []; // 复制功能列表
        this.functionList = []; // 功能存储列表
        this.selectedCities = [];
        this.rangeValuesAll = []; // 行全选
        this.productFeatureArr = [];
        // 选择数据
        this.chooseData10 = [];
        this.chooseData = [];
        this.checkBoxAll10 = false; // 大全选
        this.checkAll = false; // 次全选
        //回显
        this.flagH = "0";
        this.keshou_obj = {};
        this.keshou_objS = {};
        this.biaoq_obj = {};
        this.biaoq_objS = {};
        this.ArrObj = {};
        // 支付交付
        this.paymentMethodList = [];
        this.resultListAlls = [];
        this.resultListAllse = [
            { 'label': '请选择', 'value': '' },
        ];
        this.productContentTypeId = '';
        this.contentName = '';
        this.cars_paytool = [];
        this.payments = -1;
        this.surveyApplTypeList = [];
        this.surveyApplTypeLists = [
            {
                label: '销售订单',
                value: 1
            },
            {
                label: '购物车',
                value: 2
            },
        ];
        // 重构
        this.resultListAll = []; // 总数据
        this.resultListAllold = []; // 总数据
        this.resultListDetail = []; // 单个组件
        this.resultObj = {};
        this.resultObjV = {};
        this.arrCom = []; // 所选组件
        this.indexArr = 'zero'; // 第几次
        this.fucntionContentList = []; // 功能绑定支付交付个性化
        this.checka = 0;
        this.fucntionContentListb = []; // 功能绑定支付交付个性化(备用)
        this.isMybankCust = []; // 是否必输
        this.QuestionLists = [];
        this.isMybank = [];
        // this.treeData = this.commfunc.toChangeTree(this.infoList, 'indicatorCateName', 'indicatorCate');
        //   //审核，工作流
        if (this.activatedRoute.snapshot.params.taskCategoryId) {
            this.taskCategoryId = this.activatedRoute.snapshot.params.taskCategoryId;
        }
        this.userform = fb.group({
            'productName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            line_value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            baseProductId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            group_value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
        });
        this.userformT = fb.group({
            contentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Za-z]+$/)])
        });
        this.codeValues(); // 调用方法，获取全部码值
        this.configLevel = this.code['configLevel'];
        this.isMybank = this.code['isMybankCust'];
        this.isMybankCust = this.isMybank.splice(1);
    }
    BaseProductConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        var session = window.sessionStorage;
        if (session.getItem('para')) {
            session.removeItem('para');
        }
        this.selectedValue = "val1";
        this.activeIndex = 0;
        this.vlaue1 = "0";
        this.select_2 = [
            { label: '请选择', value: "" },
        ];
        this.select_line = [
            { label: '请选择', value: "" },
        ];
        this.select_group = [
            { label: '请选择', value: "" },
        ];
        this.items = [
            {
                label: '基本信息',
                command: function (event) {
                    _this.activeIndex = 0;
                }
            },
            {
                label: '组件设置',
                command: function (event) {
                    _this.activeIndex = 1;
                }
            },
            {
                label: '取值配置',
                command: function (event) {
                    _this.activeIndex = 2;
                }
            },
            {
                label: '功能应用',
                command: function (event) {
                    _this.activeIndex = 3;
                }
            },
            {
                label: '支付/交付应用',
                command: function (event) {
                    _this.activeIndex = 4;
                }
            },
            {
                label: '个性化信息',
                command: function (event) {
                    _this.activeIndex = 5;
                }
            }
        ];
        this.line_query();
    };
    // 码值
    BaseProductConfigComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // 获取默认编码
    BaseProductConfigComponent.prototype.getSeqNo = function () {
        var _this = this;
        var parms = {
            seqType: 'BASIC_PRODUCT',
            productLineId: this.line_value,
            productGroupId: this.group_value
        };
        this.productManageHttpService.getSeqNo(parms).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.baseProductId = data.seqNo;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    BaseProductConfigComponent.prototype.peizhi = function (item) {
        if (item.configLevelValue == '0') {
            var obj = item.productFeatures.length;
            for (var i = 0; i < obj; i++) {
                item.productFeatures[i].checkBox = false;
            }
        }
    };
    BaseProductConfigComponent.prototype.AllChoose = function () {
    };
    BaseProductConfigComponent.prototype.getType = function (obj) {
        var toString = Object.prototype.toString;
        var map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object'
        };
        if (obj instanceof Element) {
            return 'element';
        }
        return map[toString.call(obj)];
    };
    BaseProductConfigComponent.prototype.deepClone = function (data) {
        var type = this.getType(data);
        var obj;
        if (type === 'array') {
            obj = [];
        }
        else if (type === 'object') {
            obj = {};
        }
        else {
            return data;
        }
        if (type === 'array') {
            for (var i = 0, len = data.length; i < len; i++) {
                obj.push(this.deepClone(data[i]));
            }
        }
        else if (type === 'object') {
            for (var key in data) {
                obj[key] = this.deepClone(data[key]);
            }
        }
        return obj;
    };
    // 上一步
    BaseProductConfigComponent.prototype.prev = function () {
        var kk = document.getElementById('KK');
        var contents = kk.getElementsByClassName('ui-steps-number');
        for (var i = 0; i < contents.length; i++) {
            contents[i]['style'].backgroundColor = '#757575';
            if (i < this.activeIndex - 1) {
                contents[i]['style'].backgroundColor = '#71d071';
            }
            if (i == (this.activeIndex - 1)) {
                contents[i]['style'].backgroundColor = '#ffc107';
            }
        }
        if (this.activeIndex == 2) {
            // for (let key1 = 0; key1 < this.resultListAll.length; key1++) {
            //   let arr = [];
            //   this.resultListAll[key1].productFeatureTypes.forEach((data1, i) => {
            //     if (data1.checkBox10) {
            //       arr.push(i)
            //     }
            //   });
            //   if (arr.length == 0) {
            //     this.chooseComFlogAll = false;
            //     this.msgs = [];
            //     this.msgs.push({ severity: 'error', summary: '提示', detail: "必选组件,属性、属性值为必选" });
            //     return;
            //   } else {
            //     this.chooseComFlogAll = true;
            //     this.resultClick(0, this.resultListAll[0]);
            //   }
            // }
            // if (this.chooseComFlog && this.chooseComFlogAll) {
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
            this.zujianId = '-1';
            // }
        }
        else if (this.activeIndex == 4) {
            this.resultfClick(0, this.fucntionContentList[0], 'pay');
            this.fucntionContentListb = this.fucntionContentList;
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
        }
        else if (this.activeIndex == 5) {
            this.resultfClick(0, this.fucntionContentList[0], 'survey');
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
        }
        else {
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
        }
    };
    // 下一步
    BaseProductConfigComponent.prototype.next = function () {
        var _this = this;
        if (this.activeIndex == 0) {
            // 验证
            for (var i in this.userform.controls) {
                this.userform.controls[i].markAsDirty();
            }
            //处理是否提交
            for (var i in this.userform.controls) {
                if (!this.userform.controls[i].valid) {
                    return;
                }
            }
            var baseProductId = this.baseProductId.split('');
            if (baseProductId.length == 4) {
                this.bpcBean.baseProductId = this.baseProductIdhead + this.baseProductId;
                var redo_name = {
                    categoryName: this.bpcBean.productName,
                    categoryId: this.bpcBean.baseProductId,
                    productCategoryTypeId: 'PRODUCT_TEMPLATE',
                    productTypeId: 'SELL_PRODUCT',
                    productGroup: this.group_value,
                };
                this.productManageHttpService.queryIdAndNameIsNotExist(redo_name).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        if (data.isOrNot == "is_id") {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: "基础产品id重复" });
                        }
                        else if (data.isOrNot == "is_name") {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: "基础产品名称重复" });
                        }
                        else if (data.isOrNot == "not") {
                            _this.activeIndex = _this.activeIndex + 1;
                            _this.vlaue1 = _this.activeIndex;
                            _this.componentQuery();
                        }
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                });
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "基础编号必须是10位!" });
            }
        }
        if (this.activeIndex == 4) {
            this.resultfClick(0, this.fucntionContentList[0], 'pay');
            // let checksa = 0;
            // let checksb = 0;
            // this.fucntionContentList.forEach(items => {
            //   if (items.paymentMethodTypeList.length == 0) {
            //     checksa++;
            //   }
            //   if (items.contentList.length == 0) {
            //     checksb++;
            //   }
            // });
            // if (checksa > 0) {
            //   this.msgs = [];
            //   this.msgs.push({ severity: 'error', summary: '提示', detail: "有功能下未选择支付工具！" });
            //   return;
            // } else if (checksb > 0) {
            //   this.msgs = [];
            //   this.msgs.push({ severity: 'error', summary: '提示', detail: "有功能下没有交付！" });
            //   return;
            // } else {
            // 查询个性化信息（调查）
            this.activeIndex = this.activeIndex + 1;
            this.vlaue1 = this.activeIndex;
            this.checka = 0;
            this.queryQuestionType();
            setTimeout(function () {
                _this.resultfClick(0, _this.fucntionContentList[0], 'survey');
            }, 200);
            // }
        }
        if (this.activeIndex == 3) {
            if (this.funList_right.length == 0) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择功能" });
                return;
            }
            else { // 支付交付，个性化保存绑定功能的列表
                this.checka = 0;
                this.activeIndex = this.activeIndex + 1;
                this.vlaue1 = this.activeIndex;
                this.prodFuncQueryPayTools();
                this.queryContentType();
                // 初始化
                this.fucntionContentList = [];
                this.funList_right.forEach(function (element) {
                    _this.fucntionContentList.push({
                        functionId: element.productFunctionId,
                        functionName: element.productFunctionName,
                        paymentMethodTypeList: [],
                        contentList: [],
                        surveyOptionList: [{
                                surveyTypeId: 'CART_ADD',
                                surveyTypeName: '购物车',
                                questonList: [],
                            }],
                    });
                });
                this.fucntionContentList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.fucntionContentList);
                // 如果是上一步后再次进入给已配置的赋值
                if (this.fucntionContentListb.length > 0) {
                    this.fucntionContentList.forEach(function (itemse, i) {
                        _this.fucntionContentListb.forEach(function (items) {
                            if (itemse.functionId == items.functionId) {
                                var questonList = [];
                                if (items.surveyOptionList.length > 0) {
                                    questonList = items.surveyOptionList[0].questonList;
                                }
                                _this.fucntionContentList[i] = {
                                    functionId: items.functionId,
                                    functionName: items.functionName,
                                    paymentMethodTypeList: items.paymentMethodTypeList,
                                    contentList: items.contentList,
                                    surveyOptionList: [{
                                            surveyTypeId: 'CART_ADD',
                                            surveyTypeName: '购物车',
                                            questonList: questonList,
                                        }],
                                };
                            }
                        });
                    });
                }
                this.fucntionContentList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.fucntionContentList);
                setTimeout(function () {
                    _this.resultfClick(0, _this.fucntionContentList[0], 'pay');
                }, 200);
            }
        }
        if (this.activeIndex == 2) {
            var _loop_1 = function (key1) {
                var arr = [];
                this_1.resultListAll[key1].productFeatureTypes.forEach(function (data1, i) {
                    if (data1.checkBox10) {
                        arr.push(i);
                    }
                });
                if (arr.length == 0) {
                    this_1.chooseComFlogAll = false;
                    this_1.msgs = [];
                    this_1.msgs.push({ severity: 'error', summary: '提示', detail: "必选组件,属性、属性值为必选" });
                    return { value: void 0 };
                }
                else {
                    this_1.chooseComFlogAll = true;
                    this_1.resultClick(key1, this_1.resultListAll[key1]);
                }
            };
            var this_1 = this;
            for (var key1 = 0; key1 < this.resultListAll.length; key1++) {
                var state_1 = _loop_1(key1);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            if (this.chooseComFlog && this.chooseComFlogAll) {
                this.activeIndex = this.activeIndex + 1;
                this.vlaue1 = this.activeIndex;
                this.funQuery();
            }
            else {
                return;
            }
        }
        if (this.activeIndex == 1) {
            this.cars_left.forEach(function (item) {
                item['type'] = "NOREQUIRED";
            });
            this.cars_right.forEach(function (item) {
                item['type'] = "NOREQUIRED";
            });
            if (this.comType != undefined) {
                this.comType.forEach(function (item) {
                    _this.cars_right[item].type = "REQUIRED";
                });
            }
            if (this.cars_right.length > 0) {
                this.arrCom = [];
                this.cars_right.forEach(function (element) {
                    _this.arrCom.push(element.productFeatureCategoryId);
                });
                var dataAll = this.arrCom.toString();
                this.productManageHttpService.getFeatureByFeatureCategoryList({ productFeatureCategoryIds: dataAll }).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        if (_this.indexArr == 'zero') {
                            _this.resultListAll = data.resultList;
                            _this.resultListAllold = _this.deepClone(data.resultList);
                            _this.indexArr = 'one';
                        }
                        else if (_this.indexArr == 'one') {
                            // 删掉
                            var arrzero_1 = [];
                            _this.resultListAll.forEach(function (item3) {
                                _this.arrCom.forEach(function (item4) {
                                    if (item3.productFeatureCategoryId == item4) {
                                        arrzero_1.push(item3);
                                    }
                                });
                            });
                            _this.resultListAll = arrzero_1;
                            _this.resultListAll.forEach(function (item1) {
                                data.resultList.forEach(function (item2, i) {
                                    if (item2.productFeatureCategoryId == item1.productFeatureCategoryId) {
                                        data.resultList.splice(i, 1);
                                    }
                                });
                            });
                            _this.resultListAll = _this.resultListAll.concat(data.resultList);
                        }
                        _this.resultListAll.forEach(function (data1) {
                            data1.productFeatureTypes.forEach(function (item) {
                                if (item['index'] != 'one') {
                                    item['index'] = 'one';
                                    item['checkBox10'] = false;
                                    item['checkDate'] = false;
                                    item.configLevelValue = "0"; //默认配置级别
                                    item.productFeatures.forEach(function (itemss) {
                                        itemss['checkBox'] = false;
                                    });
                                }
                            });
                        });
                        if (_this.resultListAll) {
                            _this.resultListAll.forEach(function (item1s) {
                                _this.cars_right_old.forEach(function (item2s) {
                                    if (item2s.index === true && item2s.productFeatureCategoryId == item1s.productFeatureCategoryId) {
                                        item2s.productFeatureTypeList.forEach(function (item3s) {
                                            item1s.productFeatureTypes.forEach(function (item4s) {
                                                if (item3s.productFeatureTypeId == item4s.productFeatureTypeId) {
                                                    item4s.checkBox10 = true; //属性单选
                                                    item4s.configLevelValue = item3s.configLevel; //配置级别
                                                    if (item3s.featureType == '01') {
                                                        if (item3s.productFeatureList.length == item4s.productFeatures.length) {
                                                            item4s.checkDate = true;
                                                        }
                                                        item3s.productFeatureList.forEach(function (item5s) {
                                                            item4s.productFeatures.forEach(function (item6s) {
                                                                if (item5s.productFeatureId == item6s.productFeatureId) {
                                                                    item6s.checkBox = true; //属性值单选
                                                                }
                                                            });
                                                        });
                                                    }
                                                    else if (item3s.featureType == '02') {
                                                        item3s.productFeatureList.forEach(function (item5s) {
                                                            item4s.productFeatures.forEach(function (item6s) {
                                                                if (item5s.productFeatureId == item6s.productFeatureId) {
                                                                    if (item6s.valueType == '06') {
                                                                        item6s.def = item5s.def;
                                                                        item6s.description = item5s.description;
                                                                        item6s.inc = item5s.inc;
                                                                    }
                                                                    else {
                                                                        item6s.def = item5s.def;
                                                                        item6s.description = item5s.description;
                                                                        item6s.inc = item5s.inc;
                                                                        item6s.max = item5s.max;
                                                                        item6s.min = item5s.min;
                                                                    }
                                                                }
                                                            });
                                                        });
                                                    }
                                                }
                                            });
                                        });
                                        item2s.index = false;
                                    }
                                });
                            });
                        }
                        _this.resultClick(0, _this.resultListAll[0]);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                });
                this.activeIndex = this.activeIndex + 1;
                this.vlaue1 = this.activeIndex;
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择组件" });
            }
        }
        if (this.activeIndex == 5) {
        }
        var this_ = this;
        setTimeout(function () {
            var kk = document.getElementById('KK');
            var contents = kk.getElementsByClassName('ui-steps-number');
            for (var i = 0; i < contents.length; i++) {
                contents[i]['style'].backgroundColor = '#757575';
                if (i <= this_.activeIndex - 1) {
                    contents[i]['style'].backgroundColor = '#71d071';
                }
                if (i == (this_.activeIndex)) {
                    contents[i]['style'].backgroundColor = '#ffc107';
                }
            }
        }, 200);
    };
    // 属性值类型
    BaseProductConfigComponent.prototype.queryQuestionType = function () {
        var _this = this;
        this.productManageHttpService.queryQuestionType({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.QuestionLists = [];
                var obj = data.questionTypeMap;
                for (var key in obj) {
                    _this.QuestionLists.push({
                        label: obj[key],
                        value: key,
                    });
                }
                _this.QuestionLists = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.QuestionLists);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 支付工具查询
    BaseProductConfigComponent.prototype.prodFuncQueryPayTools = function () {
        var _this = this;
        var param = {
            pageNum: 1,
            pageSize: 10000
        };
        this.productManageHttpService.prodFuncQueryPayTools(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.paymentMethodList = data.paymentMethodList;
                _this.paymentMethodList.forEach(function (item) {
                    item['show'] = 'N';
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 支付工具选择
    BaseProductConfigComponent.prototype.paymentMethodClick = function (i, col) {
        var result = this.resultListAlls.indexOf(col.paymentMethodTypeId);
        if (result == '-1') {
            this.resultListAlls.push(col.paymentMethodTypeId);
            this.paymentMethodList[i].show = 'Y';
        }
        else {
            this.resultListAlls.splice(result);
            this.paymentMethodList[i].show = 'N';
        }
        this.paymentMethodList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.paymentMethodList);
    };
    // 交付服务类型下拉列表查询
    BaseProductConfigComponent.prototype.queryContentType = function () {
        var _this = this;
        this.productManageHttpService.queryContentType({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.resultListAllse = [
                    { 'label': '请选择', 'value': '' },
                ];
                var obj = data.contentTypeMap;
                for (var key in obj) {
                    _this.resultListAllse.push({
                        label: obj[key],
                        value: key,
                    });
                }
                _this.resultListAllse = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.resultListAllse);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 点击组件属性查看
    BaseProductConfigComponent.prototype.resultClick = function (i, col) {
        var _this = this;
        var arrA = [];
        this.odd = 0;
        if (this.zujianId != '-1') {
            this.resultListAll.forEach(function (data1) {
                // 判断上个组件是否含有选中
                if (data1.productFeatureCategoryId == _this.zujianId) {
                    data1.productFeatureTypes.forEach(function (data2, i_1) {
                        if (data2.checkBox10) {
                            arrA.push(i_1.toString());
                        }
                    });
                    if (arrA.length == 0) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "必选组件,属性为必选" });
                        _this.chooseComFlog = false;
                    }
                    else {
                        var _loop_2 = function (item01) {
                            var arr = [];
                            data1.productFeatureTypes[item01].productFeatures.forEach(function (item02, i) {
                                if (item02.checkBox) {
                                    arr.push(i);
                                }
                            });
                            if (arr.length == 0) {
                                if (data1.productFeatureTypes[item01].featureType == '01') {
                                    _this.msgs = [];
                                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data1.productFeatureTypes[item01].productFeatureTypeId + "属性值为必选" });
                                    _this.chooseComFlog = false;
                                    _this.odd++;
                                    return "break";
                                }
                                else {
                                    var valueTypee = data1.productFeatureTypes[item01].productFeatures[0].valueType;
                                    var configLevelValuee = data1.productFeatureTypes[item01].configLevelValue;
                                    if (valueTypee == '06' && configLevelValuee == '0') {
                                        var deff = data1.productFeatureTypes[item01].productFeatures[0].def;
                                        var minn = parseInt(data1.productFeatureTypes[item01].productFeatures[0].min);
                                        var maxx = parseInt(data1.productFeatureTypes[item01].productFeatures[0].max);
                                        if (deff != null && deff >= minn && maxx >= deff) {
                                            _this.chooseComFlog = true;
                                        }
                                        else {
                                            _this.msgs = [];
                                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data1.productFeatureTypes[item01].productFeatureTypeId + "属性值不可为空或不在" + minn + "--" + maxx + "范围内!" });
                                            _this.chooseComFlog = false;
                                            _this.odd++;
                                        }
                                    }
                                    else if (valueTypee == '06' && configLevelValuee == '1') {
                                        _this.resultListAllold.forEach(function (itemse) {
                                            if (itemse.productFeatureCategoryId == data1.productFeatureCategoryId) {
                                                itemse.productFeatureTypes.forEach(function (itemsed) {
                                                    if (itemsed.productFeatureTypeId == data1.productFeatureTypes[item01].productFeatureTypeId) {
                                                        var maxxe = parseInt(itemsed.productFeatures[0].max);
                                                        var minne = parseInt(itemsed.productFeatures[0].min);
                                                        var minnd = parseInt(data1.productFeatureTypes[item01].productFeatures[0].min);
                                                        var maxxd = parseInt(data1.productFeatureTypes[item01].productFeatures[0].max);
                                                        var minca = minnd - minne;
                                                        var maxca = maxxe - maxxd;
                                                        if (minnd != NaN && maxxd != NaN && minca >= 0 && maxca >= 0 && maxxd > minnd) {
                                                            _this.chooseComFlog = true;
                                                        }
                                                        else {
                                                            _this.msgs = [];
                                                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data1.productFeatureTypes[item01].productFeatureTypeId + "属性值不可为空或不在" + minne + "--" + maxxe + "范围内!" });
                                                            _this.chooseComFlog = false;
                                                            _this.odd++;
                                                        }
                                                    }
                                                });
                                            }
                                        });
                                    }
                                    else if (valueTypee == '06' && configLevelValuee == '2') {
                                        _this.chooseComFlog = true;
                                    }
                                    else if (valueTypee == '05') {
                                        var deff1 = data1.productFeatureTypes[item01].productFeatures[0].def;
                                        if (deff1 == '') {
                                            _this.msgs = [];
                                            _this.msgs.push({ severity: 'error', summary: '提示', detail: "属性值不可为空!" });
                                            _this.chooseComFlog = false;
                                            _this.odd++;
                                        }
                                        else {
                                            _this.chooseComFlog = true;
                                        }
                                    }
                                    else if (valueTypee != '06' && valueTypee != '05') {
                                        _this.resultListAllold.forEach(function (itemse) {
                                            if (itemse.productFeatureCategoryId == data1.productFeatureCategoryId) {
                                                itemse.productFeatureTypes.forEach(function (itemsed) {
                                                    if (itemsed.productFeatureTypeId == data1.productFeatureTypes[item01].productFeatureTypeId) {
                                                        var maxxes = parseInt(itemsed.productFeatures[0].max);
                                                        var minnes = parseInt(itemsed.productFeatures[0].min);
                                                        var minnds = parseInt(data1.productFeatureTypes[item01].productFeatures[0].min);
                                                        var maxxds = parseInt(data1.productFeatureTypes[item01].productFeatures[0].max);
                                                        var minc = minnds - minnes;
                                                        var maxc = maxxes - maxxds;
                                                        if (minnds != NaN && maxxds != NaN && minc >= 0 && maxc >= 0 && maxxds > minnds) {
                                                            _this.chooseComFlog = true;
                                                        }
                                                        else {
                                                            _this.msgs = [];
                                                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data1.productFeatureTypes[item01].productFeatureTypeId + "属性值不可为空或不在" + minnes + "--" + maxxes + "范围内!" });
                                                            _this.chooseComFlog = false;
                                                            _this.odd++;
                                                        }
                                                    }
                                                });
                                            }
                                        });
                                    }
                                }
                            }
                            else if (arr.length > 1) {
                                if (data1.productFeatureTypes[item01].configLevelValue === '0') {
                                    _this.msgs = [];
                                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data1.productFeatureTypes[item01].productFeatureTypeId + "属性为模板级仅选一个属性值" });
                                    _this.chooseComFlog = false;
                                    _this.odd++;
                                    return "break";
                                }
                                else {
                                    _this.chooseComFlog = true;
                                }
                            }
                            else if (arr.length == 1) {
                                _this.chooseComFlog = true;
                            }
                        };
                        for (var _i = 0, arrA_1 = arrA; _i < arrA_1.length; _i++) {
                            var item01 = arrA_1[_i];
                            var state_2 = _loop_2(item01);
                            if (state_2 === "break")
                                break;
                        }
                    }
                }
            });
        }
        if (this.odd > 0) {
            this.chooseComFlog = false;
        }
        this.chooseComFlog = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseComFlog);
        if (this.chooseComFlog) {
            this.showClass = col.description;
            this.aIndex = i;
            this.resultListDetail = col.productFeatureTypes;
            this.zujianId = col.productFeatureCategoryId; //点击之后的组件id
            this.checkBoxAll10 = false;
        }
        else {
            return;
        }
    };
    // 功能查询
    BaseProductConfigComponent.prototype.funQuery = function () {
        var _this = this;
        this.productManageHttpService.productFunctionQueryList(this.pfcBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.funList_left = [];
                if (_this.funList_right.length > 0) {
                    data.functionList.forEach(function (item) {
                        var checkss = 0;
                        _this.funList_right.forEach(function (items) {
                            if (items.productFunctionId === item.productFunctionId) {
                                checkss++;
                            }
                        });
                        if (checkss === 0) {
                            _this.funList_left.push(item);
                        }
                    });
                }
                else {
                    _this.funList_left = data.functionList;
                }
                _this.totalFun = data.size;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //树点击
    BaseProductConfigComponent.prototype.nodeSelect = function (event) {
    };
    BaseProductConfigComponent.prototype.nodeExpend = function (event) {
        var arr = [];
        arr = this.infoList;
        event.node.children = arr;
    };
    // 产品组件查询
    BaseProductConfigComponent.prototype.componentQuery = function () {
        var _this = this;
        this.productManageHttpService.productFeatureCategoryList(this.componentViewBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.cars_left = [];
                if (_this.cars_right.length > 0) {
                    data.productFeatureCategoryList.forEach(function (item) {
                        var checkss = 0;
                        _this.cars_right.forEach(function (items) {
                            if (items.productFeatureCategoryId === item.productFeatureCategoryId) {
                                checkss++;
                            }
                        });
                        if (checkss === 0) {
                            _this.cars_left.push(item);
                        }
                    });
                }
                else {
                    _this.cars_left = data.productFeatureCategoryList;
                }
                _this.total = data.total;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 分页
    BaseProductConfigComponent.prototype.paginate = function (event) {
        // 每页显示的条数
        this.componentViewBean.pageSize = event.rows;
        // 当前页
        var currentPage = event.page + 1;
        this.componentViewBean.pageNum = currentPage;
        // 调用查询的方法
        this.componentQuery();
        this.valueListOneAll = false;
        this.valueListOne = [];
        this.componentViewBean.pageNum = 1;
    };
    // 组件右分页
    BaseProductConfigComponent.prototype.paginates = function (event) {
        console.log(event);
        // 每页显示的条数
        this.pageSizes = event.rows;
        // 当前页
        var currentPages = event.page + 1;
        var currentPages1 = currentPages * 10;
        // this.firsts = event.page + 1;
        // 调用查询的方法
        if (this.cars_right) {
            this.totals = this.cars_right.length;
        }
        else {
            this.totals = 0;
        }
        this.cars_rightlist = [];
        if (this.cars_right.length > currentPages1) {
            var currentPages2 = currentPages1 - 10;
            this.cars_rightlist = this.cars_right.slice(currentPages2, currentPages1);
        }
        else {
            var currentPages2 = currentPages1 - 10;
            this.cars_rightlist = this.cars_right.slice(currentPages2);
        }
        this.valueListTwo = [];
    };
    // 组件左分页
    BaseProductConfigComponent.prototype.paginateFun = function (event) {
        // 每页显示的条数
        this.pfcBean.pageSize = event.rows;
        // 当前页
        var currentPage = event.page + 1;
        this.pfcBean.pageNum = currentPage;
        this.funQuery();
        // 调用查询的方法
        this.pfcBean.pageNum = 1;
    };
    // 功能右分页
    BaseProductConfigComponent.prototype.paginateg = function (event) {
        // 每页显示的条数
        this.pageSizeg = event.rows;
        // 当前页
        var currentPages = event.page + 1;
        var currentPages1 = currentPages * 10;
        // this.firsts = event.page + 1;
        // 调用查询的方法
        if (this.funList_right) {
            this.totalg = this.funList_right.length;
        }
        else {
            this.totalg = 0;
        }
        this.funList_rightlist = [];
        if (this.funList_right.length > currentPages1) {
            var currentPages2 = currentPages1 - 10;
            this.funList_rightlist = this.funList_right.slice(currentPages2, currentPages1);
        }
        else {
            var currentPages2 = currentPages1 - 10;
            this.funList_rightlist = this.funList_right.slice(currentPages2);
        }
        this.rightListFun = [];
    };
    // 组件右移选中
    BaseProductConfigComponent.prototype.rightMovre = function () {
        var _this = this;
        var stu = true;
        var temp = [];
        var temp1 = [];
        var arrsright = [];
        this.valueListOne.forEach(function (item, i) {
            _this.cars_right.forEach(function (item_2) {
                if (item_2.productFeatureCategoryId == _this.cars_left[item].productFeatureCategoryId) {
                    stu = false;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "请不要选择重复组件" });
                    _this.valueListOne = [];
                }
            });
            if (stu) {
                arrsright.push(item);
                arrsright.sort(function (a, b) { return b - a; });
                _this.cars_right.push(_this.cars_left[item]);
                if (_this.cars_rightlist.length < 10) {
                    _this.cars_rightlist.push(_this.cars_left[item]);
                }
            }
        });
        if (stu) {
            arrsright.forEach(function (item, i) {
                _this.cars_left.splice(item, 1);
            });
            this.cars_rightlist = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_rightlist);
            this.cars_right = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_right);
            temp1 = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_left);
            this.cars_left = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](temp1);
            this.valueListOne = [];
            if (this.cars_right) {
                this.totals = this.cars_right.length;
            }
            else {
                this.totals = 0;
            }
            // 默认必选组件
            this.comType = [];
            for (var i = 0; i < this.cars_right.length; i++) {
                this.comType.push(i.toString());
            }
        }
        this.valueListOneAll = false;
        console.log(this.cars_right);
    };
    // 组件左移选中
    BaseProductConfigComponent.prototype.liftMovre = function () {
        var _this = this;
        var temp = [];
        var temp1 = [];
        var arrsleft = [];
        this.valueListTwo.forEach(function (item) {
            arrsleft.push(item);
            arrsleft.sort(function (a, b) { return b - a; });
            _this.cars_left.push(_this.cars_right[item]);
        });
        arrsleft.forEach(function (item, i) {
            _this.cars_right.forEach(function (items, k) {
                if (items.productFeatureCategoryId === _this.cars_rightlist[item].productFeatureCategoryId) {
                    _this.cars_right.splice(k, 1);
                }
            });
            _this.cars_rightlist.splice(item, 1);
        });
        this.cars_right = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_right);
        this.cars_rightlist = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_rightlist);
        temp1 = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_left);
        this.cars_left = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](temp1);
        this.valueListTwo = [];
        if (this.cars_right) {
            this.totals = this.cars_right.length;
        }
        else {
            this.totals = 0;
        }
        // 默认必选组件
        this.comType = [];
        for (var i = 0; i < this.cars_right.length; i++) {
            this.comType.push(i.toString());
        }
        this.checkclicke = false;
    };
    // 组件右全选
    BaseProductConfigComponent.prototype.checkclickes = function () {
        var _this = this;
        if (this.checkclicke) {
            this.cars_rightlist.forEach(function (item, k) {
                var valuet = k.toString();
                _this.valueListTwo.push(valuet);
            });
        }
        else {
            this.valueListTwo = [];
        }
        this.valueListTwo = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.valueListTwo);
    };
    // 判断是否需要全选（右）
    BaseProductConfigComponent.prototype.checkclickese = function () {
        if (this.valueListTwo.length === this.cars_rightlist.length) {
            this.checkclicke = true;
        }
        else {
            this.checkclicke = false;
        }
    };
    // 基础产品新增提交
    BaseProductConfigComponent.prototype.serverMath = function (data) {
        var _this = this;
        this.bpcBean.functionList = [];
        this.bpcBean.feature = [];
        // 属性存值
        this.productFeatureArr = [];
        this.resultListAll.forEach(function (item11) {
            item11.productFeatureTypes.forEach(function (item12) {
                if (item12.checkBox10 == true) {
                    if (item12.featureType == '01') {
                        item12.productFeatures.forEach(function (items, i) {
                            if (items.checkBox) {
                                var objA = {
                                    productFeatureId: items.productFeatureId,
                                    configLevel: item12.configLevelValue,
                                    description: items.description,
                                    productFeatureTypeId: items.productFeatureTypeId,
                                    productFeatureCategoryId: items.productFeatureCategoryId,
                                    valueType: items.valueType,
                                    max: items.max,
                                    min: items.min,
                                    def: items.def,
                                    inc: items.inc,
                                    productFeatureLocalCode: items.productFeatureLocalCode,
                                };
                                _this.productFeatureArr.push(objA);
                            }
                        });
                    }
                    if (item12.featureType == '02') {
                        var objB_1 = {};
                        item12.productFeatures.forEach(function (itemss, i) {
                            if (itemss.min != null) {
                                itemss.min = itemss.min.toString();
                            }
                            if (itemss.max != null) {
                                itemss.max = itemss.max.toString();
                            }
                            if (itemss.def != null) {
                                itemss.def = itemss.def.toString();
                            }
                            if (itemss.inc != null) {
                                itemss.inc = itemss.inc.toString();
                            }
                            if (itemss.valueType == '06') {
                                if (item12.configLevelValue == "0") {
                                    objB_1 = {
                                        productFeatureId: itemss.productFeatureId,
                                        configLevel: item12.configLevelValue,
                                        description: itemss.description,
                                        productFeatureTypeId: itemss.productFeatureTypeId,
                                        productFeatureCategoryId: itemss.productFeatureCategoryId,
                                        valueType: itemss.valueType,
                                        max: '',
                                        min: '',
                                        def: itemss.def,
                                        inc: itemss.inc,
                                        productFeatureLocalCode: itemss.productFeatureLocalCode,
                                    };
                                }
                                else {
                                    objB_1 = {
                                        productFeatureId: itemss.productFeatureId,
                                        configLevel: item12.configLevelValue,
                                        description: itemss.description,
                                        productFeatureTypeId: itemss.productFeatureTypeId,
                                        productFeatureCategoryId: itemss.productFeatureCategoryId,
                                        valueType: itemss.valueType,
                                        max: itemss.max,
                                        min: itemss.min,
                                        def: itemss.def,
                                        inc: itemss.inc,
                                        productFeatureLocalCode: itemss.productFeatureLocalCode,
                                    };
                                }
                            }
                            else {
                                objB_1 = {
                                    productFeatureId: itemss.productFeatureId,
                                    configLevel: item12.configLevelValue,
                                    description: itemss.description,
                                    productFeatureTypeId: itemss.productFeatureTypeId,
                                    productFeatureCategoryId: itemss.productFeatureCategoryId,
                                    valueType: itemss.valueType,
                                    max: itemss.max,
                                    min: itemss.min,
                                    def: itemss.def,
                                    inc: itemss.inc,
                                    productFeatureLocalCode: itemss.productFeatureLocalCode,
                                };
                            }
                            _this.productFeatureArr.push(objB_1);
                        });
                    }
                }
            });
        });
        this.bpcBean.productGroup = this.group_value;
        this.bpcBean.productTypeId = 'SELL_PRODUCT';
        // 组件转值
        var tempCars = [];
        this.cars_right.forEach(function (item) {
            var obj = {};
            obj['featureId'] = item.productFeatureCategoryId;
            obj['type'] = item.type;
            tempCars.push(obj);
        });
        this.bpcBean.feature = tempCars;
        this.functionList = [];
        this.bpcBean.productFeature = this.productFeatureArr;
        this.funList_right.forEach(function (item) {
            var obj = {};
            obj['productFunctionId'] = item.productFunctionId;
            _this.functionList.push(obj);
        });
        this.bpcBean.functionList = this.functionList;
        this.bpcBean.baseProductId = this.baseProductIdhead + this.baseProductId;
        this.bpcBean.productId = this.baseProductIdhead + this.baseProductId;
        this.bpcBean.functionContentList = [];
        this.bpcBean.functionContentList = this.fucntionContentList;
        console.log(this.bpcBean);
        // this.data = JSON.stringify(this.bpcBean);
        var pram = {
            paramsMap: this.bpcBean,
        };
        // 提交服务
        this.productManageHttpService.createBaseProduct(pram).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.productId = data.baseProductId;
                _this.bpcBean = new _bean_base_product_config_bean__WEBPACK_IMPORTED_MODULE_5__["BpcBean"]();
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                var this_2 = _this;
                setTimeout(function () {
                    this_2.router.navigate(['/pages/tzb/product-manage/base-product/base-product-view']);
                }, 2000);
            }
            else {
                _this.isComplete = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.isComplete = false;
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 产品线下拉
    BaseProductConfigComponent.prototype.line_query = function () {
        var _this = this;
        this.componentViewBean = new _bean_base_product_config_bean__WEBPACK_IMPORTED_MODULE_5__["ComponentViewBean"]();
        this.productManageHttpService.productLinePull(this.componentViewBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.productLineList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.categoryName;
                    obj['value'] = item.productCategoryId;
                    _this.select_line.push(obj);
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 产品线下拉改变
    BaseProductConfigComponent.prototype.lineVelue = function () {
        this.select_group = [
            { label: '请选择', value: "" },
        ];
        var parm = this.line_value;
        this.group_query(parm);
        this.group_value = '';
    };
    // 根据产品组编号回显基础产品编号首部
    BaseProductConfigComponent.prototype.group_change = function () {
        if (this.group_value) {
            this.baseProductIdhead = 'B' + this.group_value.slice(1, 6);
            this.getSeqNo();
        }
    };
    // 产品组下拉
    BaseProductConfigComponent.prototype.group_query = function (item) {
        var _this = this;
        var parm = { productLineId: item };
        this.productManageHttpService.productGroupPull(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.productGroupList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.categoryName;
                    obj['value'] = item.productCategoryId;
                    _this.select_group.push(obj);
                    if (_this.isGroupQuery) {
                        _this.group_value = _this.isGroupQueryV;
                        _this.isGroupQuery = false;
                    }
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 完成
    BaseProductConfigComponent.prototype.severClick = function () {
        this.isComplete = true;
        this.resultfClick(0, this.fucntionContentList[0], 'survey');
        this.serverMath(this.resultListAll);
    };
    // 返回
    BaseProductConfigComponent.prototype.goBack = function () {
        window.history.go(-1);
    };
    // 功能右移
    BaseProductConfigComponent.prototype.rightFunMovre = function () {
        var _this = this;
        var stu = true;
        var temps = [];
        var temps1 = [];
        var arrsright = [];
        this.leftListFun.forEach(function (item, i) {
            _this.funList_right.forEach(function (item_2) {
                if (item_2.productFunctionId == _this.funList_left[item].productFunctionId) {
                    stu = false;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "请不要选择重复功能" });
                    _this.leftListFun = [];
                }
            });
            if (stu) {
                arrsright.push(item);
                arrsright.sort(function (a, b) { return b - a; });
                _this.funList_right.push(_this.funList_left[item]);
                if (_this.funList_rightlist.length < 10) {
                    _this.funList_rightlist.push(_this.funList_left[item]);
                }
            }
        });
        if (stu) {
            arrsright.forEach(function (item, i) {
                _this.funList_left.splice(item, 1);
            });
            this.funList_right = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.funList_right);
            this.funList_rightlist = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.funList_rightlist);
            temps1 = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.funList_left);
            this.funList_left = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](temps1);
            this.leftListFun = [];
            if (this.funList_right) {
                this.totalg = this.funList_right.length;
            }
            else {
                this.totalg = 0;
            }
        }
    };
    // 功能左移
    BaseProductConfigComponent.prototype.liftFunMovre = function () {
        var _this = this;
        var tempss = [];
        var tempss1 = [];
        var arrsleft = [];
        this.rightListFun.forEach(function (item) {
            arrsleft.push(item);
            arrsleft.sort(function (a, b) { return b - a; });
            _this.funList_left.push(_this.funList_right[item]);
        });
        arrsleft.forEach(function (item, i) {
            _this.funList_right.forEach(function (items, k) {
                if (items.productFunctionId === _this.funList_rightlist[item].productFunctionId) {
                    _this.funList_right.splice(k, 1);
                }
            });
            _this.funList_rightlist.splice(item, 1);
        });
        this.funList_right = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.funList_right);
        this.funList_rightlist = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.funList_rightlist);
        tempss1 = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.funList_left);
        this.funList_left = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](tempss1);
        this.rightListFun = [];
        if (this.funList_right) {
            this.totalg = this.funList_right.length;
        }
        else {
            this.totalg = 0;
        }
    };
    // 组件全选
    BaseProductConfigComponent.prototype.AllChooseZ = function () {
        this.valueListOne = [];
        var emptyArr = [];
        if (this.valueListOneAll == true) {
            for (var i = 0; i < this.cars_left.length; i++) {
                this.valueListOne.push(i.toString());
            }
        }
        else if (this.valueListOneAll == false) {
            this.valueListOne = [];
        }
        emptyArr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.valueListOne);
        this.valueListOne = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](emptyArr);
    };
    BaseProductConfigComponent.prototype.AllChooseZd = function () {
        if (this.valueListOne.length != this.cars_left.length) {
            this.valueListOneAll = false;
        }
        else {
            this.valueListOneAll = true;
        }
    };
    BaseProductConfigComponent.prototype.changeValue = function (item) {
        item.checkBox10 = true;
    };
    // 多行列表全选按钮
    BaseProductConfigComponent.prototype.checkBoxAllClick10 = function () {
        for (var i = 0; i < this.resultListDetail.length; i++) {
            if (this.checkBoxAll10 == true) {
                this.resultListDetail[i].checkBox10 = true;
                this.chooseData10.push(this.resultListDetail[i]);
                this.select_atr.push(i);
            }
            else {
                this.chooseData10 = [];
                this.select_atr = [];
                this.resultListDetail[i].checkBox10 = false;
            }
        }
    };
    // 多行列表单选按钮
    BaseProductConfigComponent.prototype.checkBoxClick10 = function (i, data) {
        var _this = this;
        if (data.checkBox10) {
            this.select_atr.push(i);
            this.chooseData10.push(data);
        }
        else {
            this.chooseData10.forEach(function (item, i) {
                if (item == data) {
                    _this.chooseData10.splice(i, 1);
                    _this.select_atr.splice(i, 1);
                }
            });
        }
        var arrA = [];
        this.resultListDetail.forEach(function (itema, i) {
            if (itema.checkBox10) {
                arrA.push(i);
            }
        });
        if (arrA.length == this.resultListDetail.length) {
            this.checkBoxAll10 = true;
        }
        else {
            this.checkBoxAll10 = false;
        }
    };
    // 单行列表全选按钮
    BaseProductConfigComponent.prototype.checkAllClickA = function (item) {
        if (item.checkDate) {
            if (item.configLevelValue == '0') {
                if (item.productFeatures.length > 1) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: item.productFeatureTypeId + "属性为模板级仅选一个属性值" });
                    item.checkDate = false;
                    return;
                }
                else {
                    item.checkBox10 = true;
                }
            }
            else {
                item.checkBox10 = true;
            }
        }
        else {
            item.checkBox10 = false;
        }
        for (var i = 0; i < item.productFeatures.length; i++) {
            if (item['checkDate'] == true) {
                item.productFeatures[i].checkBox = true;
                this.chooseData.push(item.productFeatures[i]);
            }
            else {
                this.chooseData = [];
                item.productFeatures[i].checkBox = false;
            }
        }
    };
    // 单行列表单选按钮
    BaseProductConfigComponent.prototype.checkBoxClickA = function (i, data, item) {
        var _this = this;
        var arr = [];
        item.productFeatures.forEach(function (itemC, i) {
            if (itemC.checkBox) {
                arr.push(i);
            }
        });
        if (item.configLevelValue == '0') {
            if (arr.length > 1) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: item.productFeatureTypeId + "属性为模板级仅选一个属性值" });
                data.checkBox = false;
                return;
            }
        }
        if (data.checkBox) {
            item.checkBox10 = true;
            var arrA_2 = [];
            this.resultListDetail.forEach(function (itema, i) {
                if (itema.checkBox10) {
                    arrA_2.push(i);
                }
            });
            if (arrA_2.length == this.resultListDetail.length) {
                this.checkBoxAll10 = true;
            }
            else {
                this.checkBoxAll10 = false;
            }
            this.chooseData.push(data);
        }
        else {
            this.chooseData.forEach(function (item, i) {
                if (item == data) {
                    _this.chooseData.splice(i, 1);
                }
            });
        }
        if (arr.length == item.productFeatures.length) {
            item['checkDate'] = true;
        }
        else {
            item['checkDate'] = false;
        }
    };
    // 选择模板按钮
    BaseProductConfigComponent.prototype.choiceTemplate = function (item) {
        this.display = true;
        this.headerTitle = '选择模板';
        this.showModel = '1';
        this.updateValue = item;
        this.select_group = [
            { label: '请选择', value: "" },
        ];
    };
    // 选择模板的回调
    BaseProductConfigComponent.prototype.choiceTemplateCall = function (param) {
        this.display = param.display;
        this.copybaseName = param.list.productName;
        this.line_value = param.list.productLineId;
        var line = param.list.productLineId.slice(1, 3);
        // let group = param.list.productGroupId.slice(1, 4);
        // this.baseProductIdhead = 'B' + line + group;
        var group = param.list.productGroupId.slice(1, 6);
        this.baseProductIdhead = 'B' + group;
        this.isGroupQuery = true;
        this.isGroupQueryV = param.list.productGroupId;
        this.group_query(this.line_value);
        var dataBase = { baseProductId: param.list.productId };
        if (dataBase.baseProductId) {
            this.baseQuery(dataBase);
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请重新获取基础产品信息" });
        }
    };
    // 基础产品详情查询
    BaseProductConfigComponent.prototype.baseQuery = function (item) {
        var _this = this;
        this.cars_right_old = [];
        this.cars_right = [];
        this.funList_right_old = [];
        this.funList_right = [];
        this.productManageHttpService.getBaseProductDetails(item).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.cars_right_old = data.productFeatureCategoryList;
                _this.cars_right_old.forEach(function (itemse, m) {
                    _this.cars_right_old[m]['description'] = itemse.productFeatureCategoryName;
                });
                _this.cars_right_old = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.cars_right_old);
                _this.cars_right = _this.cars_right.concat(_this.cars_right_old);
                if (_this.cars_right) {
                    _this.totals = _this.cars_right.length;
                }
                if (_this.cars_right.length > 10) {
                    _this.cars_rightlist = _this.cars_right.slice(0, 10);
                }
                else {
                    _this.cars_rightlist = _this.cars_right.slice(0);
                }
                _this.cars_right_old.forEach(function (item) {
                    item['index'] = true;
                });
                _this.funList_right_old = data.productFunctionList;
                _this.funList_right = _this.funList_right.concat(_this.funList_right_old); //功能查询
                if (_this.funList_right) {
                    _this.totalg = _this.funList_right.length;
                }
                if (_this.funList_right.length > 10) {
                    _this.funList_rightlist = _this.funList_right.slice(0, 10);
                }
                else {
                    _this.funList_rightlist = _this.funList_right.slice(0);
                }
                _this.fucntionContentListb = data.productContentList;
                _this.fucntionContentListb.forEach(function (items, i) {
                    items.contentList.forEach(function (itemse, k) {
                        var fromd = new Date(itemse.fromDate);
                        _this.fucntionContentListb[i].contentList[k].fromDate = _this.commfunc.transDateN(fromd);
                        if (itemse.thruDate) {
                            var thrud = new Date(itemse.thruDate);
                            _this.fucntionContentListb[i].contentList[k].thruDate = _this.commfunc.transDateN(thrud);
                        }
                        else {
                            _this.fucntionContentListb[i].contentList[k].thruDate = '';
                        }
                        // let thrud = new Date(itemse.thruDate);
                        // this.fucntionContentListb[i].contentList[k].thruDate = this.commfunc.transDateN(thrud);
                    });
                });
                _this.fucntionContentListb = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.fucntionContentListb);
                _this.getSeqNo();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "请按照正确步骤操作" });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    BaseProductConfigComponent.prototype.ceshi = function () {
        console.log(this.resultListAll[0]);
    };
    BaseProductConfigComponent.prototype.choseAdd = function () {
        if (this.selectedValue == 'copyAdd') {
            this.copyValue = true;
        }
        else {
            this.copyValue = false;
        }
        this.baseProductIdhead = '';
        this.copybaseName = '';
        this.line_value = '';
        this.select_group = [
            { label: '请选择', value: "" },
        ];
        this.cars_right_old = [];
        this.cars_right = [];
        this.cars_rightlist = [];
        this.funList_right_old = [];
        this.funList_right = [];
    };
    // 是否展开组件框
    BaseProductConfigComponent.prototype.openClick = function () {
        if (this.vlaueOpen == 'open') {
            this.vlaueOpen = 'down';
        }
        else {
            this.vlaueOpen = 'open';
        }
    };
    // 是否展开功能框
    BaseProductConfigComponent.prototype.openClickf = function () {
        if (this.vlaueOpenf == 'open') {
            this.vlaueOpenf = 'down';
        }
        else {
            this.vlaueOpenf = 'open';
        }
    };
    //  //点击组件属性查看
    BaseProductConfigComponent.prototype.resultfClick = function (i, col, item) {
        var _this = this;
        if (this.checka == 0) { // 是否为第一次进入，第一次进入不用先保存
            this.shows = col.functionName;
            this.checka++;
        }
        else { // 不是第一次
            // 先保存
            this.fucntionContentList.forEach(function (itemse, k) {
                if (_this.shows == itemse.functionName) {
                    if (item == 'pay') {
                        if (_this.paymentMethodList.length > 0) {
                            _this.fucntionContentList[k].paymentMethodTypeList = [];
                            _this.paymentMethodList.forEach(function (item) {
                                if (item.show == 'Y') {
                                    _this.fucntionContentList[k].paymentMethodTypeList.push({
                                        paymentMethodTypeName: item.paymentMethodTypeName,
                                        paymentMethodTypeId: item.paymentMethodTypeId,
                                    });
                                }
                            });
                        }
                        if (_this.cars_paytool.length > 0) {
                            _this.fucntionContentList[k].contentList = _this.cars_paytool;
                        }
                        else {
                            _this.fucntionContentList[k].contentList = [];
                        }
                    }
                    else if (item == 'survey') {
                        if (_this.surveyApplTypeList && _this.surveyApplTypeList.length > 0) {
                            if (_this.fucntionContentList[k].surveyOptionList.length > 0) {
                                _this.fucntionContentList[k].surveyOptionList[0]['questonList'] = _this.surveyApplTypeList;
                            }
                            else {
                                _this.fucntionContentList[k].surveyOptionList.push({
                                    questonList: _this.surveyApplTypeList
                                });
                            }
                        }
                        else {
                            if (_this.fucntionContentList[k].surveyOptionList.length > 0) {
                                _this.fucntionContentList[k].surveyOptionList[0]['questonList'] = [];
                            }
                            else {
                                _this.fucntionContentList[k].surveyOptionList.push({
                                    questonList: []
                                });
                            }
                        }
                    }
                }
            });
            this.fucntionContentList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.fucntionContentList);
            this.shows = col.functionName;
        }
        // 回显
        if (item == 'pay') {
            this.paymentMethodList.forEach(function (items) {
                items.show = 'N';
            });
            this.paymentMethodList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.paymentMethodList);
            this.paymentMethodList.forEach(function (items) {
                col.paymentMethodTypeList.forEach(function (item) {
                    if (items.paymentMethodTypeId == item.paymentMethodTypeId) {
                        items.show = 'Y';
                    }
                });
            });
            this.cars_paytool = col.contentList;
            this.paymentMethodList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.paymentMethodList);
            this.cars_paytool = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_paytool);
        }
        else if (item == 'survey') {
            if (col.surveyOptionList.length > 0) {
                this.surveyApplTypeList = col.surveyOptionList[0].questonList;
            }
            else {
                this.surveyApplTypeList = [];
            }
            this.surveyApplTypeList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.surveyApplTypeList);
        }
    };
    BaseProductConfigComponent.prototype.refresh = function () {
        this.thruDate = null;
    };
    // 新增交付服务
    BaseProductConfigComponent.prototype.addpaytool = function () {
        var _this = this;
        // 验证
        for (var i in this.userformT.controls) {
            this.userformT.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userformT.controls) {
            if (!this.userformT.controls[i].valid) {
                return;
            }
        }
        this.payments = -1;
        if (this.productContentTypeId && this.contentName && this.fromDate) { // && this.thruDate
            var paytool_1 = 0;
            this.cars_paytool.forEach(function (item) {
                if (item.contentName == _this.contentName) {
                    paytool_1++;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "该服务名称已存在!" });
                }
            });
            if (paytool_1 == 0) {
                this.cars_paytool.push({
                    productContentTypeId: this.productContentTypeId,
                    contentName: this.contentName,
                    fromDate: this.commfunc.transDateN(this.fromDate),
                    thruDate: this.commfunc.transDateN(this.thruDate)
                });
                this.productContentTypeId = '';
                this.contentName = '';
                this.thruDate = null;
                this.fromDate = null;
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "信息填写完整!" });
        }
        this.cars_paytool = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_paytool);
    };
    // 点击交付服务列表的方法
    BaseProductConfigComponent.prototype.handRowSelect = function (event) {
        var _this = this;
        this.productContentTypeId = event.data.productContentTypeId;
        this.contentName = event.data.contentName;
        this.fromDate = new Date(event.data.fromDate);
        if (event.data.thruDate) {
            this.thruDate = new Date(event.data.thruDate);
        }
        else {
            this.thruDate = null;
        }
        this.cars_paytool.forEach(function (i, item) {
            if (i.contentName == _this.contentName) {
                _this.payments = item;
            }
        });
    };
    // 修改交付服务
    BaseProductConfigComponent.prototype.modifypaytool = function () {
        var _this = this;
        // 验证
        for (var i in this.userformT.controls) {
            this.userformT.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userformT.controls) {
            if (!this.userformT.controls[i].valid) {
                return;
            }
        }
        if (this.productContentTypeId && this.contentName && this.fromDate) { //&& this.thruDate
            var paytool_2 = 0;
            this.cars_paytool.forEach(function (item) {
                if (item.contentName == _this.contentName) {
                    paytool_2++;
                }
            });
            if (paytool_2 == 0 || paytool_2 == 1) {
                if (!this.cars_paytool[this.payments]) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: "列表中没有此条信息!" });
                    return;
                }
                this.cars_paytool[this.payments].productContentTypeId = this.productContentTypeId;
                this.cars_paytool[this.payments].contentName = this.contentName;
                this.cars_paytool[this.payments].fromDate = this.commfunc.transDateN(this.fromDate);
                this.cars_paytool[this.payments].thruDate = this.commfunc.transDateN(this.thruDate);
                this.payments = -1;
                this.productContentTypeId = '';
                this.contentName = '';
                this.thruDate = null;
                this.fromDate = null;
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "该服务名称已存在!" });
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "信息填写完整!" });
        }
        this.cars_paytool = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_paytool);
    };
    // 删除交付服务
    BaseProductConfigComponent.prototype.delpaytool = function () {
        var _this = this;
        var payment = 0;
        this.cars_paytool.forEach(function (item) {
            if (item.contentName == _this.contentName) {
                payment++;
            }
        });
        if (payment > 0) {
            this.cars_paytool.splice(this.payments, 1);
            this.productContentTypeId = '';
            this.contentName = '';
            this.thruDate = null;
            this.fromDate = null;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "列表中没有此条信息!" });
        }
        this.cars_paytool = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_paytool);
        this.payments = -1;
    };
    // 个性化（调查项）新增
    BaseProductConfigComponent.prototype.addintelmation = function () {
        this.display = true;
        this.headerTitle = '个性化新增';
        this.showModel = '2';
        this.updateValue = this.surveyApplTypeList;
    };
    // 个性化新增的回调
    BaseProductConfigComponent.prototype.addintelmationCall = function (param) {
        this.display = param.display;
        if (param.list) {
            this.surveyApplTypeList = param.list;
        }
        this.surveyApplTypeList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.surveyApplTypeList);
    };
    // 删除个性化
    BaseProductConfigComponent.prototype.deleteClick = function (item) {
        var checkse = -1;
        this.surveyApplTypeList.forEach(function (items, m) {
            if (item.surveyOptionName == items.surveyOptionName) {
                checkse = m;
            }
        });
        this.surveyApplTypeList.splice(checkse, 1);
        this.surveyApplTypeList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.surveyApplTypeList);
    };
    BaseProductConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base-product-config',
            template: __webpack_require__(/*! ./base-product-config.component.html */ "./src/app/pages/tzb/product-manage/base-product/base-product-config/base-product-config.component.html"),
            styles: [__webpack_require__(/*! ./base-product-config.component.scss */ "./src/app/pages/tzb/product-manage/base-product/base-product-config/base-product-config.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_4__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        })
        /**
         * 基础产品配置
         */
        ,
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_4__["ProductManageHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], BaseProductConfigComponent);
    return BaseProductConfigComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-config/bean/base-product-config.bean.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-config/bean/base-product-config.bean.ts ***!
  \************************************************************************************************************/
/*! exports provided: BpcBean, ComponentViewBean, ProductFunctionBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpcBean", function() { return BpcBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentViewBean", function() { return ComponentViewBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFunctionBean", function() { return ProductFunctionBean; });
var BpcBean = /** @class */ (function () {
    function BpcBean() {
        this.description = ''; //             产品描述
    }
    return BpcBean;
}());

var ComponentViewBean = /** @class */ (function () {
    function ComponentViewBean() {
        this.pageSize = 10; //每页显示数量
    }
    return ComponentViewBean;
}());

// 功能分页
var ProductFunctionBean = /** @class */ (function () {
    function ProductFunctionBean() {
        this.pageNum = 1; //当前页
        this.pageSize = 10; //每页显示数量
    }
    return ProductFunctionBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-config/choose-copy-add/bean/choose-copy-add.bean.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-config/choose-copy-add/bean/choose-copy-add.bean.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ChooseCopyAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCopyAdd", function() { return ChooseCopyAdd; });
var ChooseCopyAdd = /** @class */ (function () {
    function ChooseCopyAdd() {
    }
    return ChooseCopyAdd;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-config/choose-copy-add/choose-copy-adds.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-config/choose-copy-add/choose-copy-adds.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g\">\r\n      <div class=\"ui-g-12 ui-md-12\">\r\n        <p-tree [value]=\"treeData\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 text_center\">\r\n    <div style=\"width: 90px;display: inline-block;\" class=\"margin_top_two\">\r\n      <div class=\"ui-btn2-div\">\r\n        <p class=\"place-div first\"></p>\r\n        <p class=\"place-div last\"></p>\r\n        <button pButton (click)=\"serve()\" type=\"button\" label=\"确定\" style=\"width: 60px;\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-config/choose-copy-add/choose-copy-adds.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-config/choose-copy-add/choose-copy-adds.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .margin {\n  margin-left: 10%;\n  margin-top: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2Jhc2UtcHJvZHVjdC9iYXNlLXByb2R1Y3QtY29uZmlnL2Nob29zZS1jb3B5LWFkZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxcYmFzZS1wcm9kdWN0XFxiYXNlLXByb2R1Y3QtY29uZmlnXFxjaG9vc2UtY29weS1hZGRcXGNob29zZS1jb3B5LWFkZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFRUSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2Jhc2UtcHJvZHVjdC9iYXNlLXByb2R1Y3QtY29uZmlnL2Nob29zZS1jb3B5LWFkZC9jaG9vc2UtY29weS1hZGRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIC50ZXh0X2NlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5tYXJnaW57XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-config/choose-copy-add/choose-copy-adds.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-config/choose-copy-add/choose-copy-adds.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ChooseCopyAddsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCopyAddsComponent", function() { return ChooseCopyAddsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _bean_choose_copy_add_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/choose-copy-add.bean */ "./src/app/pages/tzb/product-manage/base-product/base-product-config/choose-copy-add/bean/choose-copy-add.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChooseCopyAddsComponent = /** @class */ (function () {
    function ChooseCopyAddsComponent(productManageHttpService, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.head_title = '全局目录';
        //提示信息
        this.msgs = [];
        this.listData = {};
        this.display = false;
        //组件的参数
        this.updateValue = [];
        this.chooseCopyAdd = new _bean_choose_copy_add_bean__WEBPACK_IMPORTED_MODULE_2__["ChooseCopyAdd"]();
    }
    ChooseCopyAddsComponent.prototype.ngOnInit = function () {
        var session = window.sessionStorage;
        if (session.getItem('para')) {
            session.removeItem('para');
        }
        this.query_line();
    };
    ChooseCopyAddsComponent.prototype.query_line = function () {
        var _this = this;
        this.productManageHttpService.productCategoryLineQueryList(this.chooseCopyAdd).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var tempArr_1 = [];
                data.productLineList.forEach(function (item) {
                    var tempObj = { id: 'line' };
                    tempObj['label'] = item['productLineName'];
                    tempObj['value'] = item;
                    tempObj['children'] = [{}];
                    tempArr_1.push(tempObj);
                });
                _this.treeData = tempArr_1;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    ChooseCopyAddsComponent.prototype.nodeCheck = function (event) {
        var _this = this;
        if (event.node.id == "jichu") {
            var param = {
                productTemplateId: event.node.value.tplId
            };
            var arr = [];
            this.productManageHttpService.findAvailableProductList(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.cars_2 = data.resultList;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
            var params = {
                productId: event.node.value.tplId
            };
            this.productManageHttpService.getBaseProduct(params).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    _this.listData = data.resultList[0];
                    _this.resultList = data.resultList;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
    };
    //+号点击
    ChooseCopyAddsComponent.prototype.nodeExpend = function (event) {
        var _this = this;
        if (event.node.id == "line") {
            var parmData1 = {
                pageNum: 1,
                pageSize: 10000,
                productLineId: event.node.value.productLineId,
            };
            var arr_1 = [];
            this.productManageHttpService.productCategoryGroupInfoQueryList(parmData1).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    data.productGroupInfoList.forEach(function (item) {
                        var tempObj = { id: 'group' };
                        tempObj['label'] = item['groupName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        arr_1.push(tempObj);
                    });
                    event.node.children = arr_1;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id == "group") {
            var param = {
                groupId: event.node.value.groupId
            };
            var arr_2 = [];
            this.productManageHttpService.pdGroupTemplateQuery(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    data.groupTempList.forEach(function (item) {
                        var tempObj = { id: 'jichu' };
                        tempObj['label'] = item['tplName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        arr_2.push(tempObj);
                    });
                    event.node.children = arr_2;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id == "jichu") {
            var param = {
                productTemplateId: event.node.value.tplId
            };
            var arr = [];
            event.node.children = arr;
        }
    };
    // 详情
    ChooseCopyAddsComponent.prototype.basicDetails = function (item) {
        this.display = true;
        this.headerTitle = '可售产品详情';
        this.showModel = '1';
        this.updateValue = item.productId;
    };
    ChooseCopyAddsComponent.prototype.detailsCall = function (param) {
        this.display = param;
    };
    ChooseCopyAddsComponent.prototype.serve = function () {
        if (!this.resultList || this.resultList.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择基础产品！' });
            return;
        }
        else {
            var parm = {
                display: false,
                list: this.listData
            };
            this.outValue.emit(parm);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ChooseCopyAddsComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChooseCopyAddsComponent.prototype, "inValue", void 0);
    ChooseCopyAddsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choose-copy-adds',
            template: __webpack_require__(/*! ./choose-copy-adds.component.html */ "./src/app/pages/tzb/product-manage/base-product/base-product-config/choose-copy-add/choose-copy-adds.component.html"),
            styles: [__webpack_require__(/*! ./choose-copy-adds.component.scss */ "./src/app/pages/tzb/product-manage/base-product/base-product-config/choose-copy-add/choose-copy-adds.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], ChooseCopyAddsComponent);
    return ChooseCopyAddsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-modify/base-product-modify.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-modify/base-product-modify.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <ul class=\"ui-breadcrumb-new\">\r\n        <li class=\"active\">\r\n          <a>\r\n            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n        </li>\r\n        <li>\r\n          <a>产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>基础产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>基础产品修改</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12 module\" style=\"margin: 10px 10px;\">\r\n    <div class=\"ui-g-12 ui-md-12\" id=\"KK\">\r\n      <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 form_item\">\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='0'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"height: 40px;line-height: 40px\">\r\n                <span appValidation>产品线:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-4\">\r\n                <div style=\"width:40%;\">\r\n                  <p-dropdown styleClass=\"ui-dropdown-new\" [disabled]='NotValue' name=\"line_value\" formControlName=\"line_value\" (onChange)=\"lineVelue()\"\r\n                    [(ngModel)]=\"line_value\" [options]=\"select_line\"></p-dropdown>\r\n                  <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['line_value'].valid&&userform.controls['line_value'].dirty\">\r\n                    请选择产品线！\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"height: 40px;line-height: 40px\">\r\n                <span appValidation>产品组:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-4\">\r\n                <div style=\"width:40%;\">\r\n                  <p-dropdown styleClass=\"ui-dropdown-new\" [disabled]='NotValue' name=\"group_value\" formControlName=\"group_value\" [(ngModel)]=\"group_value\"\r\n                    [options]=\"select_group\"></p-dropdown>\r\n                  <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['group_value'].valid&&userform.controls['group_value'].dirty\">\r\n                    <span [hidden]=\"!userform.hasError('required','group_value')\"> 请选择产品组！</span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2  form_item_label\" style=\"height: 40px;line-height: 40px\">\r\n                <span>基础产品编号:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-4\">\r\n                <input name=\"productId\" formControlName=\"productId\" type=\"text\" disabled [(ngModel)]=\"bpcBean.productId\" pInputText class=\"ui-inputtext-new\"\r\n                  style=\"width: 40%\">\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2  form_item_label\" style=\"height: 40px;line-height: 40px\">\r\n                <span appValidation>基础产品名称:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-4\">\r\n                <input type=\"text\" name=\"productName\" maxlength=\"60\" [readonly]='NotValue' formControlName=\"productName\" [(ngModel)]=\"bpcBean.productName\"\r\n                  pInputText class=\"ui-inputtext-new\" style=\"width: 40%\">\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['productName'].valid&&userform.controls['productName'].dirty\">\r\n                  <span [hidden]=\"!userform.hasError('pattern','productName')\"> 基础产品输入不合法,不可输入空格或者特殊字符！</span>\r\n                <span [hidden]=\"!userform.hasError('required','productName')\"> 请填写基础产品名称！</span>\r\n                </span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n                <span>基础产品描述:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-10\">\r\n                <textarea name=\"description\" maxlength=\"200\" formControlName=\"description\" [(ngModel)]=\"bpcBean.description\" pInputTextarea\r\n                  class=\"ui-inputtextarea-new\" style=\"width:76.3%\"></textarea>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"ui-g-12 ui-md-2  form_item_label\" style=\"height: 40px;line-height: 40px\">\r\n                <span>创建人员:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-4\">\r\n                <input name=\"creat_user\" formControlName=\"creat_user\" type=\"text\" [(ngModel)]=\"creat_user\" disabled pInputText class=\"ui-inputtext-new\"\r\n                  style=\"width: 40%\">\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2  form_item_label\" style=\"height: 40px;line-height: 40px\">\r\n                <span>创建时间:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-4\">\r\n                <input name=\"createdStamp\" formControlName=\"createdStamp\" type=\"text\" [(ngModel)]=\"createdStamp\" disabled pInputText class=\"ui-inputtext-new\"\r\n                  style=\"width: 40%\">\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='1'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-5\">\r\n              <div class=\"ui-g-12 ui-md-12\">\r\n                <div class=\"ui-g-12 ui-md-2  form_item_label\" style=\"height: 40px;line-height: 30px\">\r\n                  <span>组件编号:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                  <input type=\"text\" [(ngModel)]=\"componentViewBean.productFeatureCategoryId\" pInputText class=\"ui-inputtext-new\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2  form_item_label\" style=\"height: 40px;line-height: 30px\">\r\n                  <span>组件名称:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                  <input type=\"text\" [(ngModel)]=\"componentViewBean.description\" pInputText class=\"ui-inputtext-new\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2  text_right\">\r\n                  <div style=\"width: 90px;display: inline-block;\">\r\n                    <div class=\"ui-btn1-div\">\r\n                      <p class=\"place-div first\"></p>\r\n                      <p class=\"place-div last\"></p>\r\n                      <button pButton type=\"button\" (click)=\"componentQuery()\" label=\"查询\" style=\"width: 60px;\"></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-7\">\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-5\" style=\"border: 1px solid #34cfe6;\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h3 class=\"hcolor\">|&nbsp;可选组件列表</h3>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <u-dataTable [value]=\"cars_left\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                <p-column [style]=\"{'text-align':'center'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <p-checkbox name=\"check1\" value=\"check1\" label=\"全选\" [(ngModel)]=\"checkclick\" binary=\"false\" (click)=\"checkclicks()\"></p-checkbox>\r\n                  </ng-template>\r\n                  <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"valueListOne\" value=\"{{ri}}\" name=\"aa\" (click)=\"checkclickse()\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column *ngFor=\"let col of arr_4\" [field]=\"col.label\" [header]=\"col.ch\" [style]=\"{'text-align':'center'}\"></p-column>\r\n              </u-dataTable>\r\n              <div style=\"float:right;margin:10px 10px\">\r\n                <u-paginator rows=\"{{componentViewBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                  (onPageChange)=\"paginate($event)\"></u-paginator>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 text_center\">\r\n            <div style=\"width: 90px;display: inline-block;\" class=\"margin_top_one\">\r\n              <div class=\"ui-btn2-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton (click)=\"rightMovre()\" type=\"button\" label=\">>\" style=\"width: 60px;\"></button>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div style=\"width: 90px;display: inline-block;\" class=\"margin_top_two\">\r\n              <div class=\"ui-btn2-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton (click)=\"liftMovre()\" type=\"button\" label=\"<<\" style=\"width: 60px;\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-5\" style=\"border: 1px solid #34cfe6;\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h3 class=\"hcolor\">|&nbsp;已选组件列表</h3>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <u-dataTable [value]=\"cars_rightlist\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                <p-column [style]=\"{'text-align':'center'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <p-checkbox name=\"check2\" value=\"check2\" label=\"全选\" [(ngModel)]=\"checkclicke\" binary=\"false\" (click)=\"checkclickes()\"></p-checkbox>\r\n                  </ng-template>\r\n                  <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"valueListTwo\" value=\"{{ri}}\" name=\"aa\" (click)=\"checkclickese()\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column *ngFor=\"let col of arr_5\" [field]=\"col.label\" [header]=\"col.ch\" [style]=\"{'text-align':'center'}\"></p-column>\r\n              </u-dataTable>\r\n              <div style=\"float:right;margin:10px 10px\">\r\n                <u-paginator [first]=\"firsts\" rows=\"{{pageSizes}}\" totalRecords=\"{{totals}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10]\"\r\n                  (onPageChange)=\"paginates($event)\"></u-paginator>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='2'\">\r\n        <div class=\"ui-g-12 ui-md-12 padding_zero boxAll\">\r\n          <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpen == 'down'}\">\r\n            <div class=\"un_active\" *ngFor=\"let col of resultListAll;let i = index\" (click)=\"resultClick(i,col)\" [ngClass]=\"{'active':showClass == col.description}\">\r\n              {{col.description}}\r\n              <span class=\"dline\"></span>\r\n            </div>\r\n          </div>\r\n          <div (click)=\"openClick()\" class=\"boxTwo text_center\">\r\n            <span *ngIf=\"vlaueOpen=='open'\">展开</span>\r\n            <span *ngIf=\"vlaueOpen=='down'\">收起</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 padding_zero\" *ngFor=\"let col of resultListAll;let i = index\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12\" *ngIf=\"i==aIndex\">\r\n              <u-dataTable [value]=\"resultListDetail\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                <p-column [style]=\"{'text-align':'center','width':'120px'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkBoxAll10\" binary=\"false\" (click)=\"checkBoxAllClick10()\"></p-checkbox>\r\n                  </ng-template>\r\n                  <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"col.checkBox10\" (click)=\"checkBoxClick10(ri,col)\" binary=\"true\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center' ,'width':'16%'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>配置级别</label>\r\n                  </ng-template>\r\n                  <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-dropdown styleClass=\"ui-dropdown-new\" (onChange)=\"peizhi(item)\" [(ngModel)]=\"item.configLevelValue\" [options]=\"configLevel\"></p-dropdown>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center' ,'width':'16%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center' ,'width':'16%'}\" field=\"description\" header=\"属性名称\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'80px'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>全选</label>\r\n                  </ng-template>\r\n                  <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div *ngIf=\"item.featureType =='01'\">\r\n                      <p-checkbox [(ngModel)]=\"item['checkDate']\" binary=\"false\" (click)=\"checkAllClickA(item)\"></p-checkbox>\r\n                    </div>\r\n                    <div *ngIf=\"item.featureType =='02'\">\r\n                    </div>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column>\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>取值范围</label>\r\n                  </ng-template>\r\n                  <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div *ngIf=\"item.featureType =='01'\" class=\"text_left\">\r\n                      <div *ngFor=\"let items of item.productFeatures;let ss = index\" style=\"display:inline-block\">\r\n                        <p-checkbox value=\"items.productFeatureId\" [label]=\"items.description\" [(ngModel)]=\"items.checkBox\" (click)=\"checkBoxClickA(ss,items,item)\"\r\n                          binary=\"true\"></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"item.featureType =='02'\" class=\"text_left\">\r\n                      <div *ngFor=\"let items of item.productFeatures\">\r\n                        <div *ngIf=\"items.valueType =='06'&&item.configLevelValue=='0'\">\r\n                          <input (ngModelChange)=\"changeValue(item)\" type=\"number\" [(ngModel)]=\"items.def\" pInputText style=\"width:45%\">\r\n                          <span>(</span>\r\n                          <span>{{items.min}}</span>\r\n                          <span>--</span>\r\n                          <span>{{items.max}}</span>\r\n                          <span>)</span>\r\n                        </div>\r\n                        <div *ngIf=\"items.valueType =='06'&&item.configLevelValue=='1'\">\r\n                          <input (ngModelChange)=\"changeValue(item)\" type=\"number\" [(ngModel)]=\"items.min\" pInputText style=\"width:45%\"> --\r\n                          <input (ngModelChange)=\"changeValue(item)\" type=\"number\" [(ngModel)]=\"items.max\" pInputText style=\"width:45%\">\r\n                        </div>\r\n                        <div *ngIf=\"items.valueType =='06'&&item.configLevelValue=='2'\">\r\n                          <span>数值后确定型不可选为客户级</span>\r\n                        </div>\r\n                        <div *ngIf=\"items.valueType =='05'\">\r\n                          <input (ngModelChange)=\"changeValue(item)\" type=\"text\" [(ngModel)]=\"items.def\" pInputText style=\"width:45%\">\r\n                        </div>\r\n                        <div *ngIf=\"items.valueType !='05'&&items.valueType !='06'\">\r\n                          <input (ngModelChange)=\"changeValue(item)\" type=\"number\" [(ngModel)]=\"items.min\" pInputText style=\"width:45%\"> --\r\n                          <input (ngModelChange)=\"changeValue(item)\" type=\"number\" [(ngModel)]=\"items.max\" pInputText style=\"width:45%\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                </p-column>\r\n              </u-dataTable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='3'\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-5\">\r\n              <div class=\"ui-g-12 ui-md-12\">\r\n                <div class=\"ui-g-12 ui-md-2 text_right\" style=\"height: 40px;line-height: 30px\">\r\n                  <span>功能编号:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                  <input type=\"text\" [(ngModel)]=\"pfcBean.productFunctionId\" pInputText class=\"ui-inputtext-new\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2 text_right\" style=\"height: 40px;line-height: 30px\">\r\n                  <span>功能名称:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                  <input type=\"text\" [(ngModel)]=\"pfcBean.productFunctionName\" pInputText class=\"ui-inputtext-new\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2  text_right\">\r\n                  <div style=\"width: 90px;display: inline-block;\">\r\n                    <div class=\"ui-btn1-div\">\r\n                      <p class=\"place-div first\"></p>\r\n                      <p class=\"place-div last\"></p>\r\n                      <button pButton type=\"button\" (click)=\"funQuery()\" label=\"查询\" style=\"width: 60px;\"></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-7\">\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-5\" style=\"border: 1px solid #34cfe6;\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h3 class=\"hcolor\">|&nbsp;可选功能列表</h3>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <u-dataTable [value]=\"funList_left\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                <p-column [style]=\"{'text-align':'center'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>选择</label>\r\n                  </ng-template>\r\n                  <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"leftListFun\" value=\"{{ri}}\" name=\"bb\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionId\" header=\"功能编号\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                </p-column>\r\n              </u-dataTable>\r\n              <div style=\"float:right;margin:10px 10px\">\r\n                <u-paginator rows=\"{{pfcBean.pageSize}}\" totalRecords=\"{{totalFun}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                  (onPageChange)=\"paginateFun($event)\"></u-paginator>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 text_center\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h4> </h4>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div style=\"width: 90px;display: inline-block;\" class=\"margin_top_one\">\r\n                <div class=\"ui-btn2-div\">\r\n                  <p class=\"place-div first\"></p>\r\n                  <p class=\"place-div last\"></p>\r\n                  <button pButton (click)=\"rightFunMovre()\" type=\"button\" label=\">>\" style=\"width: 60px;\"></button>\r\n                </div>\r\n              </div>\r\n              <br>\r\n              <div style=\"width: 90px;display: inline-block;\" class=\"margin_top_two\">\r\n                <div class=\"ui-btn2-div\">\r\n                  <p class=\"place-div first\"></p>\r\n                  <p class=\"place-div last\"></p>\r\n                  <button pButton (click)=\"liftFunMovre()\" type=\"button\" label=\"<<\" style=\"width: 60px;\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\" style=\"border: 1px solid #34cfe6;\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h3 class=\"hcolor\">|&nbsp;已选功能列表</h3>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <u-dataTable [value]=\"funList_rightlist\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n                <p-column [style]=\"{'text-align':'center'}\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>选择</label>\r\n                  </ng-template>\r\n                  <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"rightListFun\" value=\"{{ri}}\" name=\"cc\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n                </p-column>\r\n              </u-dataTable>\r\n              <div style=\"float:right;margin:10px 10px\">\r\n                <u-paginator [first]=\"firstg\" rows=\"{{pageSizeg}}\" totalRecords=\"{{totalg}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10]\"\r\n                  (onPageChange)=\"paginateg($event)\"></u-paginator>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='4'\">\r\n        <div class=\"ui-g-12 ui-md-12 padding_zero boxAll\">\r\n          <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpenf == 'down'}\">\r\n            <div class=\"un_active\" *ngFor=\"let col of fucntionContentList;let i = index\" (click)=\"resultfClick(i,col,'pay')\" [ngClass]=\"{'active':shows == col.functionName}\">\r\n              {{col.functionName}}\r\n              <span class=\"dline\"></span>\r\n            </div>\r\n          </div>\r\n          <div (click)=\"openClickf()\" class=\"boxTwo text_center\">\r\n            <span *ngIf=\"vlaueOpenf=='open'\">展开</span>\r\n            <span *ngIf=\"vlaueOpenf=='down'\">收起</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-12\" style=\"background-color: #e8e8e8;margin: 10px 0;\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h3 class=\"hcolor\">|&nbsp;可选支付工具</h3>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <div class=\"un_method\" *ngFor=\"let col of paymentMethodList;let i = index\" (click)=\"paymentMethodClick(i,col)\" [ngClass]=\"{'method':col.show == 'Y'}\">\r\n                {{col.paymentMethodTypeName}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\" style=\"background-color: #e8e8e8;margin: 10px 0;\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <h3 class=\"hcolor\">|&nbsp;交付服务</h3>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-9\">\r\n              <div class=\"ui-g-12 ui-md-1 form_item_label\" style=\"line-height: 30px;\">\r\n                <span>交付服务类型:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <p-dropdown styleClass=\"ui-dropdown-new\" [(ngModel)]=\"productContentTypeId\" [options]=\"resultListAllse\"></p-dropdown>\r\n              </div>\r\n              <form [formGroup]=\"userformT\">\r\n                <div class=\"ui-g-12 ui-md-1 form_item_label\" style=\"line-height: 30px;\">\r\n                  <span>交付服务名称:</span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                  <input type=\"text\" maxlength=\"60\" [(ngModel)]=\"contentName\" formControlName=\"contentName\" name=\"contentName\" pInputText class=\"ui-inputtext-new\">\r\n                  <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformT.controls['contentName'].valid&&userformT.controls['contentName'].dirty\">\r\n                    <span [hidden]=\"!userformT.hasError('pattern','contentName')\">输入不合法，交付服务名称只能是英文！</span>\r\n                  </span>\r\n                </div>\r\n              </form>\r\n              <div class=\"ui-g-12 ui-md-1 form_item_label\" style=\"line-height: 30px;\">\r\n                <span>生效时间:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <p-calendar styleClass=\"ui-calendar-new\" (onSelect)=\"refresh()\" [(ngModel)]=\"fromDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                  yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\"\r\n                  [showIcon]=\"true\" [locale]=\"ch\"></p-calendar>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-1 form_item_label\" style=\"line-height: 30px;\">\r\n                <span>失效时间:</span>\r\n              </div>\r\n              <div class=\"ui-g-12 ui-md-2\">\r\n                <p-calendar styleClass=\"ui-calendar-new\" *ngIf=\"showFlag\" [(ngModel)]=\"thruDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                  yearRange=\"1900:2200\" showButtonBar=\"true\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\"\r\n                  [showIcon]=\"true\" [locale]=\"ch\" [minDate]=\"fromDate\">\r\n                </p-calendar>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-3\" style=\"margin-top: 8px;\">\r\n              <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn1-div\">\r\n                  <p class=\"place-div first\"></p>\r\n                  <p class=\"place-div last\"></p>\r\n                  <button (click)=\"addpaytool()\" pButton type=\"button\" label=\"添加\" style=\"width: 60px;\"></button>\r\n                </div>\r\n              </div>\r\n              <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn2-div\">\r\n                  <p class=\"place-div first\"></p>\r\n                  <p class=\"place-div last\"></p>\r\n                  <button (click)=\"modifypaytool()\" pButton type=\"button\" label=\"修改\" style=\"width: 60px;\"></button>\r\n                </div>\r\n              </div>\r\n              <div style=\"width: 90px;display: inline-block;\">\r\n                <div class=\"ui-btn2-div\">\r\n                  <p class=\"place-div first\"></p>\r\n                  <p class=\"place-div last\"></p>\r\n                  <button (click)=\"delpaytool()\" pButton type=\"button\" label=\"删除\" style=\"width: 60px;\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n              <u-dataTable [value]=\"cars_paytool\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\" selectionMode=\"single\" [(selection)]=\"selectedCar\"\r\n                (onRowSelect)=\"handRowSelect($event)\">\r\n                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productContentTypeId\" header=\"交付服务类型\">\r\n                  <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.productContentTypeId|codeValuePie:resultListAllse}}\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"contentName\" header=\"交付服务名称\"></p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"fromDate\" header=\"生效时间\"></p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"thruDate\" header=\"失效时间\"></p-column>\r\n              </u-dataTable>\r\n              <!-- <div style=\"float:right;margin:10px 10px\">\r\n                <u-paginator rows=\"{{componentViewBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginate($event)\"></u-paginator>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g\" *ngIf=\"vlaue1=='5'\">\r\n        <div class=\"ui-g-12 ui-md-12 padding_zero boxAll\">\r\n          <div class=\"boxOne heTwo\" [ngClass]=\"{'heOne':vlaueOpenf == 'down'}\">\r\n            <div class=\"un_active\" *ngFor=\"let col of fucntionContentList;let i = index\" (click)=\"resultfClick(i,col,'survey')\" [ngClass]=\"{'active':shows == col.functionName}\">\r\n              {{col.functionName}}\r\n              <span class=\"dline\"></span>\r\n            </div>\r\n          </div>\r\n          <div (click)=\"openClickf()\" class=\"boxTwo text_center\">\r\n            <span *ngIf=\"vlaueOpenf=='open'\">展开</span>\r\n            <span *ngIf=\"vlaueOpenf=='down'\">收起</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-12 text_right\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n              <div class=\"ui-btn1-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <span (click)=\"addintelmation()\" pButton type=\"button\" label=\"新增\" style=\"width: 60px;\"></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <u-dataTable [value]=\"surveyApplTypeList\" emptyMessage=\"没有查找到数据\" [style]=\"{'text-align':'center'}\">\r\n              <!-- <p-column [style]=\"{'text-align':'center'}\" field=\"categoryName\" header=\"属性分类\"></p-column> -->\r\n              <p-column [style]=\"{'text-align':'center','width':'16%'}\" field=\"surveyOptionType\" header=\"属性值类型\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.surveyOptionType|codeValuePie:QuestionLists}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'16%'}\" field=\"surveyOptionName\" header=\"属性名称\"></p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'16%'}\" field=\"surveyOptionDesc\" header=\"属性描述\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                  <span *ngIf=\"item.surveyOptionDesc && item.surveyOptionDesc.length>15\">{{item.surveyOptionDesc.substring(0,15)}}...</span>\r\n                  <span *ngIf=\"item.surveyOptionDesc && item.surveyOptionDesc.length<16\">{{item.surveyOptionDesc}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'16%'}\" field=\"requiredField\" header=\"必输\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  {{col.requiredField|codeValuePie:isMybankCust}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'16%'}\" field=\"pageNum\" header=\"属性分页\"></p-column>\r\n              <p-column [style]=\"{'text-align':'center','width':'20%'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                  <label>操作</label>\r\n                </ng-template>\r\n                <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  <span class=\"icon iconfont\" pTooltip=\"删除\" tooltipPosition=\"top\" (click)=\"deleteClick(item)\" style=\"color:#fe5a48;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe673;</span>\r\n                </ng-template>\r\n              </p-column>\r\n            </u-dataTable>\r\n            <!-- <div style=\"float:right;margin:10px 10px\">\r\n              <u-paginator rows=\"{{componentViewBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginate($event)\"></u-paginator>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\" *ngIf=\"vlaue1=='6'\">\r\n          <div class=\"ui-g-12 ui-md-12\">\r\n            <b> 此基础产品不允许修改组件及功能</b>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-12 text_center\" *ngIf=\"isNotValue =='no'\">\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn2-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton (click)=\"goBack()\" type=\"button\" label=\"返回\" style=\"width: 60px;\"></button>\r\n        </div>\r\n      </div>\r\n      <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1!='0'\">\r\n        <div class=\"ui-btn2-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton (click)=\"prev()\" type=\"button\" label=\"上一步\" style=\"width: 60px;\"></button>\r\n        </div>\r\n      </div>\r\n      <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1!='5'\">\r\n        <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton (click)=\"next()\" type=\"button\" label=\"下一步\" style=\"width: 60px;\"></button>\r\n        </div>\r\n      </div>\r\n      <div style=\"width: 90px;display: inline-block;\" *ngIf=\"vlaue1=='5'\">\r\n        <!-- <div class=\"ui-btn2-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton (click)=\"severClick()\" [disabled]='iscompeled' type=\"button\" label=\"完成\" style=\"width: 60px;\"></button>\r\n        </div> -->\r\n        <button pButton (click)=\"severClick()\" [disabled]='iscompeled' type=\"button\" label=\"完成\" class=\"uButton\" style=\"width: 85px;height: 30px;\"></button>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center\" *ngIf=\"isNotValue =='yes'\">\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn2-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton (click)=\"goBack()\" type=\"button\" label=\"返回\" style=\"width: 60px;\"></button>\r\n        </div>\r\n      </div>\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <!-- <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton (click)=\"severNClick()\" [disabled]='iscompeled' type=\"button\" label=\"完成\" style=\"width: 60px;\"></button>\r\n        </div> -->\r\n        <button pButton (click)=\"severNClick()\" [disabled]='iscompeled' type=\"button\" label=\"完成\" class=\"uButton\" style=\"width: 85px;height: 30px;\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <app-surveyApplTypeList-add *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"addintelmationCall($event)\"></app-surveyApplTypeList-add>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-modify/base-product-modify.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-modify/base-product-modify.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .padding_zero {\n  padding: 0; }\n\n.container .boxAll {\n  position: relative;\n  clear: both;\n  width: 100%;\n  background-color: #19b0c8; }\n\n.container .boxOne {\n  float: left;\n  width: 90%; }\n\n.container .boxTwo {\n  float: left;\n  width: 10%;\n  padding: 10px 0; }\n\n.container .heTwo {\n  height: 40px;\n  overflow: hidden; }\n\n.container .heOne {\n  height: 100%; }\n\n.container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .text_right label {\n    font-weight: bold; }\n\n.container .text_left {\n  text-align: left; }\n\n.container .ul_box ul li {\n  list-style-type: none; }\n\n.container .margin_top_one {\n  margin-top: 12rem; }\n\n.container .margin_top_two {\n  margin-top: 2rem; }\n\n.container .border_blue {\n  border: 2px solid #0094D2; }\n\n.container .span_button {\n  text-align: center;\n  padding: 16px;\n  background-color: #0094D2;\n  border-radius: 6px; }\n\n.container .un_active {\n  display: inline-block;\n  height: 14px;\n  padding: 13px 16px;\n  border: none !important;\n  color: white;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px;\n  position: relative; }\n\n.container .active {\n  position: relative;\n  background-color: #E9F2F6;\n  color: #19b0c8; }\n\n.container .active .dline {\n    position: absolute;\n    left: 20%;\n    bottom: 0;\n    background-color: #19b0c8;\n    width: 56%;\n    height: 2px; }\n\n.container .un_method {\n  display: inline-block;\n  height: 14px;\n  padding: 10px 30px;\n  border: 1px solid #19b0c8;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px;\n  margin: 5px 20px;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.container .method {\n  color: white;\n  background-color: #19b0c8;\n  outline: none;\n  display: inline-block;\n  height: 14px;\n  padding: 10px 30px;\n  border: none !important;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 14px;\n  margin: 5px 20px;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n.overflow {\n  height: 600px;\n  overflow: scroll;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n:host/deep/ .ui-steps-item:first-child {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(2) {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(3) {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(4) {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps-item:nth-last-child(5) {\n  width: 16.5%; }\n\n:host/deep/ .ui-steps.ui-steps-readonly .ui-steps-item {\n  background-color: #fafafa; }\n\n:host/deep/ .ui-widget:disabled {\n  background-color: #ddd;\n  color: #909090; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-steps-item:first-child {\n    width: 28%; }\n  :host/deep/ .ui-steps-item:nth-last-child(2) {\n    width: 28%; }\n  :host/deep/ .ui-steps-item:nth-last-child(3) {\n    width: 28%; } }\n\n.radiocolor,\n.hcolor {\n  color: #19b0c8; }\n\n.forcolor {\n  background-color: #19b0c8; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  background: #fff;\n  width: 900px !important;\n  height: 500px !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2Jhc2UtcHJvZHVjdC9iYXNlLXByb2R1Y3QtbW9kaWZ5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHByb2R1Y3QtbWFuYWdlXFxiYXNlLXByb2R1Y3RcXGJhc2UtcHJvZHVjdC1tb2RpZnlcXGJhc2UtcHJvZHVjdC1tb2RpZnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxVQUFVLEVBQUE7O0FBRmxCO0VBS1Esa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBUmpDO0VBV1EsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFabEI7RUFlUSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFqQnZCO0VBb0JRLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFyQnhCO0VBd0JRLFlBQVksRUFBQTs7QUF4QnBCO0VBMkJRLGtCQUFrQixFQUFBOztBQTNCMUI7RUE4QlEsaUJBQWlCLEVBQUE7O0FBOUJ6QjtJQWdDWSxpQkFBaUIsRUFBQTs7QUFoQzdCO0VBb0NRLGdCQUFnQixFQUFBOztBQXBDeEI7RUF1Q1EscUJBQXFCLEVBQUE7O0FBdkM3QjtFQTBDUSxpQkFBaUIsRUFBQTs7QUExQ3pCO0VBNkNRLGdCQUFnQixFQUFBOztBQTdDeEI7RUFnRFEseUJBQXlCLEVBQUE7O0FBaERqQztFQW1EUSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUF0RDFCO0VBeURRLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQWxFMUI7RUFxRVEsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBdkV0QjtJQXlFWSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVcsRUFBQTs7QUE5RXZCO0VBa0ZRLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUEzRnZCO0VBOEZRLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUExR3ZCO0VBNkdRLHlCQUF5QixFQUFBOztBQUlqQztFQUNJLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSztJQUNHLFVBQVUsRUFBQTtFQUViO0lBQ0csVUFBVSxFQUFBO0VBRWI7SUFDRyxVQUFVLEVBQUEsRUFDYjs7QUFHTDs7RUFFSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxlQUFlLEVBQUE7O0FBRG5CO0lBR1EseUJBQXlCLEVBQUE7O0FBSWhDO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdPLHlCQUF5QixFQUFBOztBQUloQztFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9wcm9kdWN0LW1hbmFnZS9iYXNlLXByb2R1Y3QvYmFzZS1wcm9kdWN0LW1vZGlmeS9iYXNlLXByb2R1Y3QtbW9kaWZ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICAucGFkZGluZ196ZXJvIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmJveEFsbCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbiAgICAuYm94T25lIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmJveFR3byB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICAuaGVUd28ge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmhlT25lIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudGV4dF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0X2xlZnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAudWxfYm94IHVsIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luX3RvcF9vbmUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycmVtO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbl90b3BfdHdvIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlcl9ibHVlIHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA5NEQyO1xyXG4gICAgfVxyXG4gICAgLnNwYW5fYnV0dG9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NEQyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIH1cclxuICAgIC51bl9hY3RpdmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTNweCAxNnB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGMkY2O1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIC5kbGluZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NiU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51bl9tZXRob2Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOWIwYzg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm1ldGhvZCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW46IDVweCAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAgOmhvc3QgL2RlZXAvIC5mb3JtX2l0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vdmVyZmxvdyB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiAxNi41JTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoMikge1xyXG4gICAgd2lkdGg6IDE2LjUlO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbTpudGgtbGFzdC1jaGlsZCgzKSB7XHJcbiAgICB3aWR0aDogMTYuNSU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zdGVwcy1pdGVtOm50aC1sYXN0LWNoaWxkKDQpIHtcclxuICAgIHdpZHRoOiAxNi41JTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoNSkge1xyXG4gICAgd2lkdGg6IDE2LjUlO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3RlcHMudWktc3RlcHMtcmVhZG9ubHkgLnVpLXN0ZXBzLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXdpZGdldDpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6ICM5MDkwOTA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiAyOCU7XHJcbiAgICB9XHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoMikge1xyXG4gICAgICAgIHdpZHRoOiAyOCU7XHJcbiAgICB9XHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLXN0ZXBzLWl0ZW06bnRoLWxhc3QtY2hpbGQoMykge1xyXG4gICAgICAgIHdpZHRoOiAyOCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yYWRpb2NvbG9yLFxyXG4uaGNvbG9yIHtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG59XHJcblxyXG4uZm9yY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS1kYXRhIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkN2Q3ZDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgLmFjdGl2ZSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4gOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgbGkgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-modify/base-product-modify.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-modify/base-product-modify.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: BaseProductModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseProductModifyComponent", function() { return BaseProductModifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _bean_base_product_modify_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/base-product-modify.bean */ "./src/app/pages/tzb/product-manage/base-product/base-product-modify/bean/base-product-modify.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








 //中文
var BaseProductModifyComponent = /** @class */ (function () {
    function BaseProductModifyComponent(productManageHttpService, router, routerA, commfunc, fb, confirmationService) {
        this.productManageHttpService = productManageHttpService;
        this.router = router;
        this.routerA = routerA;
        this.commfunc = commfunc;
        this.fb = fb;
        this.confirmationService = confirmationService;
        this.cars_rightlist = [];
        this.firsts = 1;
        this.totals = 0;
        this.pageSizes = 10;
        // 功能右侧分页
        this.funList_rightlist = [];
        this.firstg = 1;
        this.totalg = 0;
        this.pageSizeg = 10;
        //
        this.checkclick = false; // 是否全选(左)
        this.checkclicke = false; // 是否全选(右)
        this.vlaueOpen = 'open';
        this.vlaueOpenf = 'open';
        this.categoryNameOld = ''; // 最初产品名
        this.lineValueOld = ''; // 最初产品线
        this.groupValueOld = ''; // 最初产品组
        this.isNotValue = 'no';
        this.NotValue = false; // 是否可悲修改
        this.isDianjiLast = false; // 默认点击最后一次
        this.componentFlag = true; // 属性值
        this.isDianji = false; // 判断
        this.isGroupQueryO = false; // 复制添加产品组
        this.isGroupQuery = false; // 复制添加产品组
        this.isGroupQueryV = ''; // 暂存产品组ID
        this.detailValue = {}; // 详情总数据
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["tableMessage"]; // 列表无数据
        this.odd = 0;
        // bean
        this.pfcBean = new _bean_base_product_modify_bean__WEBPACK_IMPORTED_MODULE_4__["ProductFunctionBean"](); // 产品功能
        this.bpcBean = new _bean_base_product_modify_bean__WEBPACK_IMPORTED_MODULE_4__["BpmBean"]();
        this.componentViewBean = new _bean_base_product_modify_bean__WEBPACK_IMPORTED_MODULE_4__["ComponentViewBean"]();
        // 提示信息
        this.msgs = [];
        // 控制日历刷新
        this.showFlag = true;
        // 日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["CALENDAR_CN"]; // 讲英文转化为中文
        this.fromDate = null; // 引入日期
        this.thruDate = null; // 引入日期
        // 头部
        this.head_title = '基础产品配置修改';
        this.select_2 = []; // 默认下拉
        this.select_line = []; // 产品线下拉
        this.select_group = []; // 产品组下拉
        this.creat_user = ""; // 创建人员
        this.tabViewIndex = 0; // 组件选项卡
        this.cars_left = []; // 组件数据-左（未选）
        this.cars_right = []; // 组件数据-右（未选）
        this.cars_right_old = []; //
        this.cars_right_new = []; //
        this.activeIndex = 0;
        // 分页
        this.pageSize = 10;
        this.pageNum = 1;
        // 树结构（假数据）
        this.arr_1 = [
            {
                label: '贷款',
                value: {
                    proId: '2',
                    proName: 'name1'
                },
            },
            {
                label: '村款',
                value: {
                    proId: '3',
                    proName: 'name2'
                }
            },
            {
                label: 'ftp',
                value: {
                    proId: '4',
                    proName: 'name3'
                }
            },
        ];
        this.arr_2 = [];
        this.arr_3 = [];
        this.infoList = [
            {
                indicatorCate: '1',
                indicatorCateName: "贷款",
                children: [{}]
            },
            {
                indicatorCate: '2',
                indicatorCateName: "村款"
            },
            {
                indicatorCate: '3',
                indicatorCateName: "ftp"
            },
        ];
        // 左右移动
        this.valueListOne = [];
        this.valueListTwo = [];
        this.comType = []; // 组件状态是否为必选
        // 回显
        this.flagH = "0";
        this.keshou_obj = {};
        this.keshou_objS = {};
        this.biaoq_obj = {};
        this.biaoq_objS = {};
        this.ArrObj = {};
        // 组件数据-左（未选）
        this.arr_4 = [
            {
                ch: '组件编号',
                label: 'productFeatureCategoryId',
                isShow: true
            },
            {
                ch: '组件名称',
                label: 'description',
                isShow: true
            },
        ];
        // 组件数据-右（未选）
        this.arr_5 = [
            {
                ch: '组件名称',
                label: 'description',
                isShow: true
            },
        ];
        // 组件
        this.aIndex = 0;
        this.cars_attrbute = []; // 属性列表
        this.attrbute_V = []; // 属性列表
        this.select_atr = []; // 属性选择
        this.attrValue = []; // 属性值
        this.attrValueId = []; // 属性值ID(HOUTAI sb)
        // 功能
        this.funList_left = []; // 左选择框
        this.funList_right = []; // 右选择框
        this.leftListFun = []; // 左列表
        this.rightListFun = []; // 右列表
        this.functionList = []; // 功能存储列表
        this.funList_right_old = []; //
        this.funList_right_new = []; //
        // 选中组件分页
        this.selectedCities = [];
        this.rangeValuesAll = []; // 行全选
        this.productFeatureArr = [];
        // 选择数据
        this.chooseData10 = [];
        this.chooseData = [];
        this.checkBoxAll10 = false; // 大全选
        this.checkAll = false; // 次全选
        this.iscompeled = false;
        // 重构
        this.resultListAll = []; // 总数据
        this.resultListAllold = []; // 总数据(初始)
        this.resultListDetail = []; // 单个组件
        this.resultObj = {};
        this.resultObjV = {};
        this.arrCom = []; // 所选组件
        this.indexArr = 'zero'; // 第几次
        this.chooseComFlogAll = true;
        this.chooseComFlog = true;
        // 支付交付
        this.paymentMethodList = [];
        this.resultListAlls = [];
        this.resultListAllse = [
            { 'label': '请选择', 'value': '' },
        ];
        this.productContentTypeId = '';
        this.contentName = '';
        this.cars_paytool = [];
        this.payments = -1;
        this.surveyApplTypeList = [];
        this.display = false;
        this.updateValue = [];
        this.surveyApplTypeLists = [
            {
                label: '销售订单',
                value: 1
            },
            {
                label: '购物车',
                value: 2
            },
        ];
        this.fucntionContentList = []; // 功能绑定支付交付个性化
        this.checka = 0;
        this.fucntionContentListb = []; // 功能绑定支付交付个性化(备用)
        this.isMybankCust = []; // 是否必输
        this.QuestionLists = [];
        this.isMybank = [];
        this.userform = fb.group({
            'productId': [''],
            'productName': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            'line_value': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'group_value': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'description': [''],
            'creat_user': [''],
            'createdStamp': [''],
        });
        this.userformT = fb.group({
            contentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[A-Za-z]+$/)])
        });
        this.codeValues(); // 调用方法，获取全部码值
        this.configLevel = this.code['configLevel'];
        this.isMybank = this.code['isMybankCust'];
        this.isMybankCust = this.isMybank.splice(1);
    }
    BaseProductModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedValue = "val1";
        this.activeIndex = 0;
        this.vlaue1 = "0";
        this.select_2 = [
            { label: '请选择', value: "" },
        ];
        this.select_line = [
            { label: '请选择', value: "" },
        ];
        this.select_group = [
            { label: '请选择', value: "" },
        ];
        this.items = [
            {
                label: '基本信息',
                command: function (event) {
                    _this.activeIndex = 0;
                }
            },
            {
                label: '组件设置',
                command: function (event) {
                    _this.activeIndex = 1;
                }
            },
            {
                label: '取值配置',
                command: function (event) {
                    _this.activeIndex = 2;
                }
            },
            {
                label: '功能应用',
                command: function (event) {
                    _this.activeIndex = 3;
                }
            },
            {
                label: '支付/交付应用',
                command: function (event) {
                    _this.activeIndex = 4;
                }
            },
            {
                label: '个性化信息',
                command: function (event) {
                    _this.activeIndex = 5;
                }
            }
        ];
        this.line_query();
        this.routerA.params.subscribe(function (data) {
            _this.productIdValue = data.productId;
            _this.fromStatus = data.fromStatus;
            if (_this.fromStatus == '02') {
                _this.isNotValue = 'yes';
                _this.NotValue = true;
            }
            else {
                _this.isNotValue = 'no';
                _this.NotValue = false;
            }
            _this.query_details();
        });
    };
    // 码值
    BaseProductModifyComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // 回显
    BaseProductModifyComponent.prototype.query_details = function () {
        var _this = this;
        var param = { baseProductId: this.productIdValue };
        this.productManageHttpService.getBaseProductDetails(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.detailValue = data;
                _this.bpcBean.productId = data.productCategory.productCategoryId;
                _this.bpcBean.description = data.productCategory.description;
                _this.categoryNameOld = data.productCategory.categoryName; // 最初产品名
                _this.bpcBean.productName = data.productCategory.categoryName;
                _this.lineValueOld = data.productCategory.productLineId; // 最初产品线
                _this.groupValueOld = data.productCategory.productGroupId; // 最初产品组
                _this.line_value = data.productCategory.productLineId;
                _this.isGroupQuery = true;
                _this.isGroupQueryV = data.productCategory.productGroupId;
                _this.group_query(_this.line_value);
                _this.cars_right_old = data.productFeatureCategoryList;
                _this.cars_right_old.forEach(function (itemse, m) {
                    _this.cars_right_old[m]['description'] = itemse.productFeatureCategoryName;
                });
                _this.cars_right_old = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.cars_right_old);
                _this.cars_right = _this.cars_right.concat(_this.cars_right_old);
                if (_this.cars_right) {
                    _this.totals = _this.cars_right.length;
                }
                if (_this.cars_right.length > 10) {
                    _this.cars_rightlist = _this.cars_right.slice(0, 10);
                }
                else {
                    _this.cars_rightlist = _this.cars_right.slice(0);
                }
                _this.cars_right_old.forEach(function (item) {
                    item['index'] = true;
                });
                _this.funList_right_old = data.productFunctionList;
                _this.funList_right = _this.funList_right.concat(_this.funList_right_old);
                if (_this.funList_right) {
                    _this.totalg = _this.funList_right.length;
                }
                if (_this.funList_right.length > 10) {
                    _this.funList_rightlist = _this.funList_right.slice(0, 10);
                }
                else {
                    _this.funList_rightlist = _this.funList_right.slice(0);
                }
                var createdStamps = new Date(data.productCategory.createdDate);
                _this.createdStamp = _this.commfunc.transDateN(createdStamps);
                _this.creat_user = data.productCategory.createdByUserLogin;
                _this.fucntionContentListb = data.productContentList;
                _this.fucntionContentListb.forEach(function (items, i) {
                    items.contentList.forEach(function (itemse, k) {
                        var fromd = new Date(itemse.fromDate);
                        _this.fucntionContentListb[i].contentList[k].fromDate = _this.commfunc.transDateN(fromd);
                        if (itemse.thruDate) {
                            var thrud = new Date(itemse.thruDate);
                            _this.fucntionContentListb[i].contentList[k].thruDate = _this.commfunc.transDateN(thrud);
                        }
                        else {
                            _this.fucntionContentListb[i].contentList[k].thruDate = '';
                        }
                    });
                });
                _this.fucntionContentListb = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.fucntionContentListb);
                if (_this.fromStatus == '02') {
                    _this.bpcBean.functionList = data.productFunctionList;
                    _this.bpcBean.functionContentList = _this.fucntionContentListb;
                    _this.bpcBean.feature = [];
                    _this.bpcBean.productFeature = [];
                    data.productFeatureCategoryList.forEach(function (item) {
                        _this.bpcBean.feature.push({
                            featureId: item.productFeatureCategoryId,
                            type: item.productFeatureCategoryType
                        });
                        item.productFeatureTypeList.forEach(function (items) {
                            items.productFeatureList.forEach(function (itemse) {
                                var objb = {
                                    configLevel: items.configLevel,
                                    description: items.description,
                                    productFeatureTypeId: items.productFeatureTypeId,
                                    productFeatureCategoryId: itemse.productFeatureCategoryId,
                                    productFeatureId: itemse.productFeatureId,
                                    valueType: itemse.valueType,
                                    max: itemse.max,
                                    min: itemse.min,
                                    def: itemse.def,
                                    inc: itemse.inc,
                                    productFeatureLocalCode: itemse.productFeatureLocalCode,
                                };
                                _this.bpcBean.productFeature.push(objb);
                            });
                        });
                    });
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    BaseProductModifyComponent.prototype.peizhi = function (item) {
        if (item.configLevelValue == '0') {
            var obj = item.productFeatures.length;
            for (var i = 0; i < obj; i++) {
                item.productFeatures[i].checkBox = false;
            }
        }
    };
    BaseProductModifyComponent.prototype.getType = function (obj) {
        var toString = Object.prototype.toString;
        var map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object'
        };
        if (obj instanceof Element) {
            return 'element';
        }
        return map[toString.call(obj)];
    };
    BaseProductModifyComponent.prototype.deepClone = function (data) {
        var type = this.getType(data);
        var obj;
        if (type === 'array') {
            obj = [];
        }
        else if (type === 'object') {
            obj = {};
        }
        else {
            return data;
        }
        if (type === 'array') {
            for (var i = 0, len = data.length; i < len; i++) {
                obj.push(this.deepClone(data[i]));
            }
        }
        else if (type === 'object') {
            for (var key in data) {
                obj[key] = this.deepClone(data[key]);
            }
        }
        return obj;
    };
    // 上一步
    BaseProductModifyComponent.prototype.prev = function () {
        var kk = document.getElementById('KK');
        var contents = kk.getElementsByClassName('ui-steps-number');
        for (var i = 0; i < contents.length; i++) {
            contents[i]['style'].backgroundColor = '#757575';
            if (i < this.activeIndex - 1) {
                contents[i]['style'].backgroundColor = '#71d071';
            }
            if (i == (this.activeIndex - 1)) {
                contents[i]['style'].backgroundColor = '#ffc107';
            }
        }
        if (this.activeIndex == 2) {
            // for (let key1 = 0; key1 < this.resultListAll.length; key1++) {
            //   let arr = [];
            //   this.resultListAll[key1].productFeatureTypes.forEach((data1, i) => {
            //     if (data1.checkBox10) {
            //       arr.push(i)
            //     }
            //   });
            //   if (arr.length == 0) {
            //     this.chooseComFlogAll = false;
            //     this.msgs = [];
            //     this.msgs.push({ severity: 'error', summary: '提示', detail: "必选组件,属性、属性值为必选" });
            //     return;
            //   } else {
            //     this.chooseComFlogAll = true;
            //     this.resultClick(0, this.resultListAll[0]);
            //   }
            // }
            // if (this.chooseComFlog && this.chooseComFlogAll) {
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
            this.zujianId = '-1';
            // }
        }
        else if (this.activeIndex == 4) {
            this.resultfClick(0, this.fucntionContentList[0], 'pay');
            this.fucntionContentListb = this.fucntionContentList;
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
        }
        else if (this.activeIndex == 5) {
            this.resultfClick(0, this.fucntionContentList[0], 'survey');
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
        }
        else {
            this.activeIndex = this.activeIndex - 1;
            this.vlaue1 = this.activeIndex;
        }
    };
    // 下一步
    BaseProductModifyComponent.prototype.next = function () {
        var _this = this;
        if (this.activeIndex == 4) {
            this.resultfClick(0, this.fucntionContentList[0], 'pay');
            // let checksa = 0;
            // let checksb = 0;
            // this.fucntionContentList.forEach(items => {
            //   if (items.paymentMethodTypeList.length == 0) {
            //     checksa++;
            //   }
            //   if (items.contentList.length == 0) {
            //     checksb++;
            //   }
            // });
            // if (checksa > 0) {
            //   this.msgs = [];
            //   this.msgs.push({ severity: 'error', summary: '提示', detail: "有功能下未选择支付工具！" });
            //   return;
            // } else if (checksb > 0) {
            //   this.msgs = [];
            //   this.msgs.push({ severity: 'error', summary: '提示', detail: "有功能下没有交付服务！" });
            //   return;
            // } else {
            // 查询个性化信息（调查）
            this.activeIndex = this.activeIndex + 1;
            this.vlaue1 = this.activeIndex;
            this.checka = 0;
            this.queryQuestionType();
            setTimeout(function () {
                _this.resultfClick(0, _this.fucntionContentList[0], 'survey');
            }, 200);
        }
        if (this.activeIndex == 3) {
            if (this.funList_right.length == 0) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择功能" });
                return;
            }
            else { // 支付交付，个性化保存绑定功能的列表
                this.checka = 0;
                this.activeIndex = this.activeIndex + 1;
                this.vlaue1 = this.activeIndex;
                this.prodFuncQueryPayTools();
                this.queryContentType();
                // 初始化
                this.fucntionContentList = [];
                this.funList_right.forEach(function (element) {
                    _this.fucntionContentList.push({
                        functionId: element.productFunctionId,
                        functionName: element.productFunctionName,
                        paymentMethodTypeList: [],
                        contentList: [],
                        surveyOptionList: [{
                                surveyTypeId: 'CART_ADD',
                                surveyTypeName: '购物车',
                                questonList: [],
                            }],
                    });
                });
                this.fucntionContentList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.fucntionContentList);
                // 如果是上一步后再次进入给已配置的赋值
                if (this.fucntionContentListb.length > 0) {
                    this.fucntionContentList.forEach(function (itemse, i) {
                        _this.fucntionContentListb.forEach(function (items) {
                            if (itemse.functionId == items.functionId) {
                                var questonList = [];
                                if (items.surveyOptionList.length > 0) {
                                    questonList = items.surveyOptionList[0].questonList;
                                }
                                _this.fucntionContentList[i] = {
                                    functionId: items.functionId,
                                    functionName: items.functionName,
                                    paymentMethodTypeList: items.paymentMethodTypeList,
                                    contentList: items.contentList,
                                    surveyOptionList: [{
                                            surveyTypeId: 'CART_ADD',
                                            surveyTypeName: '购物车',
                                            questonList: questonList,
                                        }],
                                };
                            }
                        });
                    });
                }
                this.fucntionContentList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.fucntionContentList);
                setTimeout(function () {
                    _this.resultfClick(0, _this.fucntionContentList[0], 'pay');
                }, 200);
            }
        }
        if (this.activeIndex == 2) {
            var _loop_1 = function (key1) {
                var arr = [];
                this_1.resultListAll[key1].productFeatureTypes.forEach(function (data1, i) {
                    if (data1.checkBox10) {
                        arr.push(i);
                    }
                });
                if (arr.length == 0) {
                    this_1.chooseComFlogAll = false;
                    this_1.msgs = [];
                    this_1.msgs.push({ severity: 'error', summary: '提示', detail: "必选组件,属性、属性值为必选" });
                    return { value: void 0 };
                }
                else {
                    this_1.chooseComFlogAll = true;
                    this_1.resultClick(key1, this_1.resultListAll[key1]);
                }
            };
            var this_1 = this;
            for (var key1 = 0; key1 < this.resultListAll.length; key1++) {
                var state_1 = _loop_1(key1);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            if (this.chooseComFlog && this.chooseComFlogAll) {
                this.activeIndex = this.activeIndex + 1;
                this.vlaue1 = this.activeIndex;
                this.funQuery();
            }
            else {
                return;
            }
        }
        if (this.activeIndex == 1) {
            this.cars_left.forEach(function (item) {
                item['type'] = "NOREQUIRED";
            });
            this.cars_right.forEach(function (item) {
                item['type'] = "NOREQUIRED";
            });
            if (this.comType != undefined) {
                this.comType.forEach(function (item) {
                    _this.cars_right[item].type = "REQUIRED";
                });
            }
            if (this.cars_right.length > 0) {
                this.arrCom = [];
                this.cars_right.forEach(function (element) {
                    _this.arrCom.push(element.productFeatureCategoryId);
                });
                var dataAll = this.arrCom.toString();
                this.productManageHttpService.getFeatureByFeatureCategoryList({ productFeatureCategoryIds: dataAll }).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        if (_this.indexArr == 'zero') {
                            _this.resultListAll = data.resultList;
                            _this.resultListAllold = _this.deepClone(data.resultList);
                            _this.indexArr = 'one';
                        }
                        else if (_this.indexArr == 'one') {
                            // 删掉
                            var arrzero_1 = [];
                            _this.resultListAll.forEach(function (item3) {
                                _this.arrCom.forEach(function (item4) {
                                    if (item3.productFeatureCategoryId == item4) {
                                        arrzero_1.push(item3);
                                    }
                                });
                            });
                            _this.resultListAll = arrzero_1;
                            _this.resultListAll.forEach(function (item1) {
                                data.resultList.forEach(function (item2, i) {
                                    if (item2.productFeatureCategoryId == item1.productFeatureCategoryId) {
                                        data.resultList.splice(i, 1);
                                    }
                                });
                            });
                            _this.resultListAll = _this.resultListAll.concat(data.resultList);
                        }
                        _this.resultListAll.forEach(function (data1) {
                            data1.productFeatureTypes.forEach(function (item) {
                                if (item['index'] != 'one') {
                                    item['index'] = 'one';
                                    item['checkBox10'] = false;
                                    item['checkDate'] = false;
                                    item.configLevelValue = "0"; // 默认配置级别
                                    item.productFeatures.forEach(function (itemss) {
                                        itemss['checkBox'] = false;
                                    });
                                }
                            });
                        });
                        if (_this.resultListAll) {
                            _this.resultListAll.forEach(function (item1s) {
                                _this.cars_right_old.forEach(function (item2s) {
                                    if (item2s.index === true && item2s.productFeatureCategoryId == item1s.productFeatureCategoryId) {
                                        item2s.productFeatureTypeList.forEach(function (item3s) {
                                            item1s.productFeatureTypes.forEach(function (item4s) {
                                                if (item3s.productFeatureTypeId == item4s.productFeatureTypeId) {
                                                    item4s.checkBox10 = true; // 属性单选
                                                    item4s.configLevelValue = item3s.configLevel; // 配置级别
                                                    if (item3s.featureType == '01') {
                                                        if (item3s.productFeatureList.length == item4s.productFeatures.length) {
                                                            item4s.checkDate = true;
                                                        }
                                                        item3s.productFeatureList.forEach(function (item5s) {
                                                            item4s.productFeatures.forEach(function (item6s) {
                                                                if (item5s.productFeatureId == item6s.productFeatureId) {
                                                                    item6s.checkBox = true; // 属性值单选
                                                                }
                                                            });
                                                        });
                                                    }
                                                    else if (item3s.featureType == '02') {
                                                        item3s.productFeatureList.forEach(function (item5s) {
                                                            item4s.productFeatures.forEach(function (item6s) {
                                                                if (item5s.productFeatureId == item6s.productFeatureId) {
                                                                    if (item6s.valueType == '06') {
                                                                        if (item4s.configLevelValue == '0') {
                                                                            item6s.def = item5s.def;
                                                                            item6s.description = item5s.description;
                                                                            item6s.inc = item5s.inc;
                                                                        }
                                                                        else if (item4s.configLevelValue == '1') {
                                                                            item6s.def = item5s.def;
                                                                            item6s.description = item5s.description;
                                                                            item6s.inc = item5s.inc;
                                                                            item6s.max = item5s.max;
                                                                            item6s.min = item5s.min;
                                                                        }
                                                                    }
                                                                    else {
                                                                        item6s.def = item5s.def;
                                                                        item6s.description = item5s.description;
                                                                        item6s.inc = item5s.inc;
                                                                        item6s.max = item5s.max;
                                                                        item6s.min = item5s.min;
                                                                    }
                                                                }
                                                            });
                                                        });
                                                    }
                                                }
                                            });
                                        });
                                        item2s.index = false;
                                    }
                                });
                            });
                        }
                        _this.resultClick(0, _this.resultListAll[0]);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                });
                this.activeIndex = this.activeIndex + 1;
                this.vlaue1 = this.activeIndex;
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择组件" });
            }
        }
        if (this.activeIndex == 0) {
            // 验证
            for (var i in this.userform.controls) {
                this.userform.controls[i].markAsDirty();
            }
            //处理是否提交
            for (var i in this.userform.controls) {
                if (!this.userform.controls[i].valid) {
                    return;
                }
            }
            if (this.group_value == '' || this.group_value == undefined) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "请选择产品组！" });
                return;
            }
            var redo_name = {
                categoryName: this.bpcBean.productName,
                categoryId: this.bpcBean.productId,
                productCategoryTypeId: 'PRODUCT_TEMPLATE',
                productTypeId: 'SELL_PRODUCT',
                productGroup: this.group_value,
            };
            this.productManageHttpService.queryNameIsNotExist(redo_name).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.isOrNot == "is") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "基础产品名称重复" });
                    }
                    else if (data.isOrNot == "not") {
                        _this.activeIndex = _this.activeIndex + 1;
                        _this.vlaue1 = _this.activeIndex;
                        _this.componentQuery();
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            });
        }
        if (this.activeIndex == 5) {
        }
        var this_ = this;
        setTimeout(function () {
            var kk = document.getElementById('KK');
            var contents = kk.getElementsByClassName('ui-steps-number');
            for (var i = 0; i < contents.length; i++) {
                contents[i]['style'].backgroundColor = '#757575';
                if (i <= this_.activeIndex - 1) {
                    contents[i]['style'].backgroundColor = '#71d071';
                }
                if (i == (this_.activeIndex)) {
                    contents[i]['style'].backgroundColor = '#ffc107';
                }
            }
        }, 200);
    };
    // 属性值类型
    BaseProductModifyComponent.prototype.queryQuestionType = function () {
        var _this = this;
        this.productManageHttpService.queryQuestionType({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.QuestionLists = [];
                var obj = data.questionTypeMap;
                for (var key in obj) {
                    _this.QuestionLists.push({
                        label: obj[key],
                        value: key,
                    });
                }
                _this.QuestionLists = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.QuestionLists);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 支付工具查询
    BaseProductModifyComponent.prototype.prodFuncQueryPayTools = function () {
        var _this = this;
        var param = {
            pageNum: 1,
            pageSize: 10000
        };
        this.productManageHttpService.prodFuncQueryPayTools(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.paymentMethodList = data.paymentMethodList;
                _this.paymentMethodList.forEach(function (item) {
                    item['show'] = 'N';
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 支付工具选择
    BaseProductModifyComponent.prototype.paymentMethodClick = function (i, col) {
        var result = this.resultListAlls.indexOf(col.paymentMethodTypeId);
        if (result == '-1') {
            this.resultListAlls.push(col.paymentMethodTypeId);
            this.paymentMethodList[i].show = 'Y';
        }
        else {
            this.resultListAlls.splice(result);
            this.paymentMethodList[i].show = 'N';
        }
        this.paymentMethodList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.paymentMethodList);
    };
    // 交付服务类型下拉列表查询
    BaseProductModifyComponent.prototype.queryContentType = function () {
        var _this = this;
        this.productManageHttpService.queryContentType({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.resultListAllse = [
                    { 'label': '请选择', 'value': '' },
                ];
                var obj = data.contentTypeMap;
                for (var key in obj) {
                    _this.resultListAllse.push({
                        label: obj[key],
                        value: key,
                    });
                }
                _this.resultListAllse = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.resultListAllse);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 功能查询
    BaseProductModifyComponent.prototype.funQuery = function () {
        var _this = this;
        this.productManageHttpService.productFunctionQueryList(this.pfcBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.funList_left = [];
                if (_this.funList_right.length > 0) {
                    data.functionList.forEach(function (item) {
                        var checkss = 0;
                        _this.funList_right.forEach(function (items) {
                            if (items.productFunctionId === item.productFunctionId) {
                                checkss++;
                            }
                        });
                        if (checkss === 0) {
                            _this.funList_left.push(item);
                        }
                    });
                }
                else {
                    _this.funList_left = data.functionList;
                }
                _this.totalFun = data.size;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 树点击
    BaseProductModifyComponent.prototype.nodeSelect = function (event) {
    };
    BaseProductModifyComponent.prototype.nodeExpend = function (event) {
        var arr = [];
        arr = this.infoList;
        event.node.children = arr;
    };
    // 产品组件查询
    BaseProductModifyComponent.prototype.componentQuery = function () {
        var _this = this;
        this.productManageHttpService.productFeatureCategoryList(this.componentViewBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.cars_left = [];
                if (_this.cars_right.length > 0) {
                    data.productFeatureCategoryList.forEach(function (item) {
                        var checkss = 0;
                        _this.cars_right.forEach(function (items) {
                            if (items.productFeatureCategoryId === item.productFeatureCategoryId) {
                                checkss++;
                            }
                        });
                        if (checkss === 0) {
                            _this.cars_left.push(item);
                        }
                    });
                }
                else {
                    _this.cars_left = data.productFeatureCategoryList;
                }
                _this.total = data.total;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 组件左分页
    BaseProductModifyComponent.prototype.paginate = function (event) {
        // 每页显示的条数
        this.componentViewBean.pageSize = event.rows;
        // 当前页
        var currentPage = event.page + 1;
        this.componentViewBean.pageNum = currentPage;
        // 调用查询的方法
        this.componentQuery();
        this.valueListOne = [];
        this.componentViewBean.pageNum = 1;
    };
    // 组件右分页
    BaseProductModifyComponent.prototype.paginates = function (event) {
        // 每页显示的条数
        this.pageSizes = event.rows;
        // 当前页
        var currentPages = event.page + 1;
        var currentPages1 = currentPages * 10;
        // this.firsts = event.page + 1;
        // 调用查询的方法
        if (this.cars_right) {
            this.totals = this.cars_right.length;
        }
        else {
            this.totals = 0;
        }
        this.cars_rightlist = [];
        if (this.cars_right.length > currentPages1) {
            var currentPages2 = currentPages1 - 10;
            this.cars_rightlist = this.cars_right.slice(currentPages2, currentPages1);
        }
        else {
            var currentPages2 = currentPages1 - 10;
            this.cars_rightlist = this.cars_right.slice(currentPages2);
        }
        this.valueListTwo = [];
    };
    // 功能左分页
    BaseProductModifyComponent.prototype.paginateFun = function (event) {
        // 每页显示的条数
        this.pfcBean.pageSize = event.rows;
        // 当前页
        var currentPage = event.page + 1;
        this.pfcBean.pageNum = currentPage;
        this.funQuery();
        // 调用查询的方法
        this.pfcBean.pageNum = 1;
    };
    // 功能右分页
    BaseProductModifyComponent.prototype.paginateg = function (event) {
        // 每页显示的条数
        this.pageSizeg = event.rows;
        // 当前页
        var currentPages = event.page + 1;
        var currentPages1 = currentPages * 10;
        // this.firsts = event.page + 1;
        // 调用查询的方法
        if (this.funList_right) {
            this.totalg = this.funList_right.length;
        }
        else {
            this.totalg = 0;
        }
        this.funList_rightlist = [];
        if (this.funList_right.length > currentPages1) {
            var currentPages2 = currentPages1 - 10;
            this.funList_rightlist = this.funList_right.slice(currentPages2, currentPages1);
        }
        else {
            var currentPages2 = currentPages1 - 10;
            this.funList_rightlist = this.funList_right.slice(currentPages2);
        }
        this.rightListFun = [];
    };
    // 组件右移选中
    BaseProductModifyComponent.prototype.rightMovre = function () {
        var _this = this;
        var stu = true;
        var temp = [];
        var temp1 = [];
        var arrsright = [];
        this.valueListOne.forEach(function (item, i) {
            _this.cars_right.forEach(function (item_2) {
                if (item_2.productFeatureCategoryId == _this.cars_left[item].productFeatureCategoryId) {
                    stu = false;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "请不要选择重复组件" });
                    _this.valueListOne = [];
                }
            });
            if (stu) {
                arrsright.push(item);
                arrsright.sort(function (a, b) { return b - a; });
                _this.cars_right.push(_this.cars_left[item]);
                if (_this.cars_rightlist.length < 10) {
                    _this.cars_rightlist.push(_this.cars_left[item]);
                }
            }
        });
        if (stu) {
            arrsright.forEach(function (item, i) {
                _this.cars_left.splice(item, 1);
            });
            this.cars_rightlist = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_rightlist);
            this.cars_right = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_right);
            temp1 = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_left);
            this.cars_left = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](temp1);
            this.valueListOne = [];
        }
        if (this.cars_right) {
            this.totals = this.cars_right.length;
        }
        else {
            this.totals = 0;
        }
        this.checkclick = false;
    };
    // 组件左移选中
    BaseProductModifyComponent.prototype.liftMovre = function () {
        var _this = this;
        var temp = [];
        var temp1 = [];
        var arrsleft = [];
        this.valueListTwo.forEach(function (item) {
            arrsleft.push(item);
            arrsleft.sort(function (a, b) { return b - a; });
            _this.cars_left.push(_this.cars_rightlist[item]);
        });
        arrsleft.forEach(function (item, i) {
            _this.cars_right.forEach(function (items, k) {
                if (items.productFeatureCategoryId === _this.cars_rightlist[item].productFeatureCategoryId) {
                    _this.cars_right.splice(k, 1);
                }
            });
            _this.cars_rightlist.splice(item, 1);
        });
        this.cars_right = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_right);
        this.cars_rightlist = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_rightlist);
        temp1 = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_left);
        this.cars_left = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](temp1);
        this.valueListTwo = [];
        if (this.cars_right) {
            this.totals = this.cars_right.length;
        }
        else {
            this.totals = 0;
        }
        this.checkclicke = false;
    };
    // 组件左全选
    BaseProductModifyComponent.prototype.checkclicks = function () {
        var _this = this;
        if (this.checkclick) {
            this.cars_left.forEach(function (item, k) {
                var valueo = k.toString();
                _this.valueListOne.push(valueo);
            });
        }
        else {
            this.valueListOne = [];
        }
        this.valueListOne = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.valueListOne);
    };
    // 判断是否需要全选
    BaseProductModifyComponent.prototype.checkclickse = function () {
        if (this.valueListOne.length === this.cars_left.length) {
            this.checkclick = true;
        }
        else {
            this.checkclick = false;
        }
    };
    // 组件右全选
    BaseProductModifyComponent.prototype.checkclickes = function () {
        var _this = this;
        if (this.checkclicke) {
            this.cars_rightlist.forEach(function (item, k) {
                var valuet = k.toString();
                _this.valueListTwo.push(valuet);
            });
        }
        else {
            this.valueListTwo = [];
        }
        this.valueListTwo = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.valueListTwo);
    };
    // 判断是否需要全选（右）
    BaseProductModifyComponent.prototype.checkclickese = function () {
        if (this.valueListTwo.length === this.cars_rightlist.length) {
            this.checkclicke = true;
        }
        else {
            this.checkclicke = false;
        }
    };
    //
    BaseProductModifyComponent.prototype.TypeDetail = function (col) {
        var _this = this;
        this.productManageHttpService.productFeatureTypeDetail({ productFeatureTypeId: col }).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.resultListAllold = [];
                _this.resultListAllold = data.result;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 点击组件属性查看
    BaseProductModifyComponent.prototype.resultClick = function (i, col) {
        var _this = this;
        var arrA = [];
        this.odd = 0;
        if (this.zujianId != '-1') {
            this.resultListAll.forEach(function (data1) {
                // 判断上个组件是否含有选中
                if (data1.productFeatureCategoryId == _this.zujianId) {
                    data1.productFeatureTypes.forEach(function (data2, i_1) {
                        if (data2.checkBox10) {
                            arrA.push(i_1.toString());
                        }
                    });
                    if (arrA.length == 0) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "必选组件,属性为必选" });
                        _this.chooseComFlog = false;
                    }
                    else {
                        var _loop_2 = function (item01) {
                            var arr = [];
                            data1.productFeatureTypes[item01].productFeatures.forEach(function (item02, i) {
                                if (item02.checkBox) {
                                    arr.push(i);
                                }
                            });
                            if (arr.length == 0) {
                                if (data1.productFeatureTypes[item01].featureType == '01') {
                                    _this.msgs = [];
                                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data1.productFeatureTypes[item01].productFeatureTypeId + "属性值为必选" });
                                    _this.chooseComFlog = false;
                                    _this.odd++;
                                    return "break";
                                }
                                else {
                                    var valueTypee = data1.productFeatureTypes[item01].productFeatures[0].valueType;
                                    var configLevelValuee = data1.productFeatureTypes[item01].configLevelValue;
                                    if (valueTypee == '06' && configLevelValuee == '0') {
                                        var deff = data1.productFeatureTypes[item01].productFeatures[0].def;
                                        var minn = parseInt(data1.productFeatureTypes[item01].productFeatures[0].min);
                                        var maxx = parseInt(data1.productFeatureTypes[item01].productFeatures[0].max);
                                        if (deff != null && deff >= minn && maxx >= deff) {
                                            _this.chooseComFlog = true;
                                        }
                                        else {
                                            _this.msgs = [];
                                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data1.productFeatureTypes[item01].productFeatureTypeId + "属性值不可为空或不在" + minn + "--" + maxx + "范围内!" });
                                            _this.chooseComFlog = false;
                                            _this.odd++;
                                        }
                                    }
                                    else if (valueTypee == '06' && configLevelValuee == '1') {
                                        _this.resultListAllold.forEach(function (itemse) {
                                            if (itemse.productFeatureCategoryId == data1.productFeatureCategoryId) {
                                                itemse.productFeatureTypes.forEach(function (itemsed) {
                                                    if (itemsed.productFeatureTypeId == data1.productFeatureTypes[item01].productFeatureTypeId) {
                                                        var maxxe = parseInt(itemsed.productFeatures[0].max);
                                                        var minne = parseInt(itemsed.productFeatures[0].min);
                                                        var minnd = parseInt(data1.productFeatureTypes[item01].productFeatures[0].min);
                                                        var maxxd = parseInt(data1.productFeatureTypes[item01].productFeatures[0].max);
                                                        var minca = minnd - minne;
                                                        var maxca = maxxe - maxxd;
                                                        if (minnd != NaN && maxxd != NaN && minca >= 0 && maxca >= 0 && maxxd > minnd) {
                                                            _this.chooseComFlog = true;
                                                        }
                                                        else {
                                                            _this.msgs = [];
                                                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data1.productFeatureTypes[item01].productFeatureTypeId + "属性值不可为空或不在" + minne + "--" + maxxe + "范围内!" });
                                                            _this.chooseComFlog = false;
                                                            _this.odd++;
                                                        }
                                                    }
                                                });
                                            }
                                        });
                                    }
                                    else if (valueTypee == '06' && configLevelValuee == '2') {
                                        _this.chooseComFlog = true;
                                    }
                                    else if (valueTypee == '05') {
                                        var deff1 = data1.productFeatureTypes[item01].productFeatures[0].def;
                                        if (deff1 == '') {
                                            _this.msgs = [];
                                            _this.msgs.push({ severity: 'error', summary: '提示', detail: "属性值不可为空!" });
                                            _this.chooseComFlog = false;
                                            _this.odd++;
                                        }
                                        else {
                                            _this.chooseComFlog = true;
                                        }
                                    }
                                    else if (valueTypee != '06' && valueTypee != '05') {
                                        _this.resultListAllold.forEach(function (itemse) {
                                            if (itemse.productFeatureCategoryId == data1.productFeatureCategoryId) {
                                                itemse.productFeatureTypes.forEach(function (itemsed) {
                                                    if (itemsed.productFeatureTypeId == data1.productFeatureTypes[item01].productFeatureTypeId) {
                                                        var maxxes = parseInt(itemsed.productFeatures[0].max);
                                                        var minnes = parseInt(itemsed.productFeatures[0].min);
                                                        var minnds = parseInt(data1.productFeatureTypes[item01].productFeatures[0].min);
                                                        var maxxds = parseInt(data1.productFeatureTypes[item01].productFeatures[0].max);
                                                        var minc = minnds - minnes;
                                                        var maxc = maxxes - maxxds;
                                                        if (minnds != NaN && maxxds != NaN && minc >= 0 && maxc >= 0 && maxxds > minnds) {
                                                            _this.chooseComFlog = true;
                                                        }
                                                        else {
                                                            _this.msgs = [];
                                                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data1.productFeatureTypes[item01].productFeatureTypeId + "属性值不可为空或不在" + minnes + "--" + maxxes + "范围内!" });
                                                            _this.chooseComFlog = false;
                                                            _this.odd++;
                                                        }
                                                    }
                                                });
                                            }
                                        });
                                    }
                                }
                            }
                            else if (arr.length > 1) {
                                if (data1.productFeatureTypes[item01].configLevelValue === '0') {
                                    _this.msgs = [];
                                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data1.productFeatureTypes[item01].productFeatureTypeId + "属性为模板级仅选一个属性值" });
                                    _this.chooseComFlog = false;
                                    _this.odd++;
                                    return "break";
                                }
                                else {
                                    _this.chooseComFlog = true;
                                }
                            }
                            else if (arr.length == 1) {
                                _this.chooseComFlog = true;
                            }
                        };
                        for (var _i = 0, arrA_1 = arrA; _i < arrA_1.length; _i++) {
                            var item01 = arrA_1[_i];
                            var state_2 = _loop_2(item01);
                            if (state_2 === "break")
                                break;
                        }
                    }
                }
            });
        }
        if (this.odd > 0) {
            this.chooseComFlog = false;
        }
        this.chooseComFlog = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseComFlog);
        if (this.chooseComFlog) {
            this.showClass = col.description;
            this.aIndex = i;
            this.resultListDetail = col.productFeatureTypes;
            this.zujianId = col.productFeatureCategoryId; // 点击之后的组件id
            this.checkBoxAll10 = false;
        }
        else {
            return;
        }
    };
    // 基础产品修改提交
    BaseProductModifyComponent.prototype.serverMath = function (data) {
        var _this = this;
        this.iscompeled = true;
        // 属性存值
        this.productFeatureArr = [];
        this.resultListAll.forEach(function (item11) {
            item11.productFeatureTypes.forEach(function (item12) {
                if (item12.checkBox10 == true) {
                    if (item12.featureType == '01') {
                        item12.productFeatures.forEach(function (items, i) {
                            if (items.checkBox) {
                                var objA = {
                                    productFeatureId: items.productFeatureId,
                                    configLevel: item12.configLevelValue,
                                    description: items.description,
                                    productFeatureTypeId: items.productFeatureTypeId,
                                    productFeatureCategoryId: items.productFeatureCategoryId,
                                    valueType: items.valueType,
                                    max: items.max,
                                    min: items.min,
                                    def: items.def,
                                    inc: items.inc,
                                    productFeatureLocalCode: items.productFeatureLocalCode,
                                };
                                _this.productFeatureArr.push(objA);
                            }
                        });
                    }
                    if (item12.featureType == '02') {
                        var objB_1 = {};
                        item12.productFeatures.forEach(function (itemss, i) {
                            if (itemss.valueType == '06') {
                                if (item12.configLevelValue == "0") {
                                    objB_1 = {
                                        productFeatureId: itemss.productFeatureId,
                                        configLevel: item12.configLevelValue,
                                        description: itemss.description,
                                        productFeatureTypeId: itemss.productFeatureTypeId,
                                        productFeatureCategoryId: itemss.productFeatureCategoryId,
                                        valueType: itemss.valueType,
                                        max: '',
                                        min: '',
                                        def: itemss.def,
                                        inc: itemss.inc,
                                        productFeatureLocalCode: itemss.productFeatureLocalCode,
                                    };
                                }
                                else {
                                    objB_1 = {
                                        productFeatureId: itemss.productFeatureId,
                                        configLevel: item12.configLevelValue,
                                        description: itemss.description,
                                        productFeatureTypeId: itemss.productFeatureTypeId,
                                        productFeatureCategoryId: itemss.productFeatureCategoryId,
                                        valueType: itemss.valueType,
                                        max: itemss.max,
                                        min: itemss.min,
                                        def: itemss.def,
                                        inc: itemss.inc,
                                        productFeatureLocalCode: itemss.productFeatureLocalCode,
                                    };
                                }
                            }
                            else {
                                objB_1 = {
                                    productFeatureId: itemss.productFeatureId,
                                    configLevel: item12.configLevelValue,
                                    description: itemss.description,
                                    productFeatureTypeId: itemss.productFeatureTypeId,
                                    productFeatureCategoryId: itemss.productFeatureCategoryId,
                                    valueType: itemss.valueType,
                                    max: itemss.max,
                                    min: itemss.min,
                                    def: itemss.def,
                                    inc: itemss.inc,
                                    productFeatureLocalCode: itemss.productFeatureLocalCode,
                                };
                            }
                            _this.productFeatureArr.push(objB_1);
                        });
                    }
                }
            });
        });
        this.bpcBean.productGroup = this.group_value;
        this.bpcBean.productGroupId = this.group_value;
        this.bpcBean.productTypeId = 'SELL_PRODUCT';
        // 组件转值
        var tempCars = [];
        this.cars_right.forEach(function (item) {
            var obj = {};
            obj['featureId'] = item.productFeatureCategoryId;
            obj['type'] = item.type;
            tempCars.push(obj);
        });
        this.bpcBean.feature = tempCars;
        this.bpcBean.productFeature = this.productFeatureArr;
        this.functionList = [];
        this.funList_right.forEach(function (item) {
            var obj = {};
            obj['productFunctionId'] = item.productFunctionId;
            _this.functionList.push(obj);
        });
        this.bpcBean.functionList = this.functionList;
        this.bpcBean.functionContentList = [];
        this.bpcBean.functionContentList = this.fucntionContentList;
        var pram = {
            paramsMap: this.bpcBean,
        };
        // 提交服务
        this.productManageHttpService.updateBaseProduct(pram).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.bpcBean = new _bean_base_product_modify_bean__WEBPACK_IMPORTED_MODULE_4__["BpmBean"]();
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                var this_2 = _this;
                setTimeout(function () {
                    this_2.router.navigate(['/pages/tzb/product-manage/base-product/base-product-view']);
                    this.iscompeled = false;
                }, 2000);
            }
            else {
                _this.iscompeled = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.iscompeled = false;
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 产品线下拉
    BaseProductModifyComponent.prototype.line_query = function () {
        var _this = this;
        this.componentViewBean = new _bean_base_product_modify_bean__WEBPACK_IMPORTED_MODULE_4__["ComponentViewBean"]();
        this.productManageHttpService.productLinePull(this.componentViewBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.productLineList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.categoryName;
                    obj['value'] = item.productCategoryId;
                    _this.select_line.push(obj);
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 产品线下拉改变
    BaseProductModifyComponent.prototype.lineVelue = function () {
        this.select_group = [];
        this.group_query(this.line_value);
    };
    // 产品组下拉
    BaseProductModifyComponent.prototype.group_query = function (itemValue) {
        var _this = this;
        this.select_group = [{ label: '请选择', value: "" },];
        var parm = { productLineId: itemValue };
        this.productManageHttpService.productGroupPull(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.productGroupList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.categoryName;
                    obj['value'] = item.productCategoryId;
                    _this.select_group.push(obj);
                });
                var arr = [];
                arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.select_group);
                _this.select_group = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](arr);
                if (_this.isGroupQueryO === false && _this.isGroupQuery === false) {
                    _this.group_value = '';
                }
                if (_this.isGroupQuery === true) {
                    _this.group_value = _this.isGroupQueryV;
                    _this.isGroupQuery = false;
                }
                if (_this.isGroupQueryO === true) {
                    _this.group_value = _this.groupValueOld;
                    _this.isGroupQueryO = false;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 完成
    BaseProductModifyComponent.prototype.severClick = function () {
        this.iscompeled = true;
        this.resultfClick(0, this.fucntionContentList[0], 'survey');
        this.serverMath(this.keshou_objS);
    };
    // 返回
    BaseProductModifyComponent.prototype.goBack = function () {
        window.history.go(-1);
    };
    // 功能右移
    BaseProductModifyComponent.prototype.rightFunMovre = function () {
        var _this = this;
        var stu = true;
        var temps = [];
        var temps1 = [];
        var arrsright = [];
        this.leftListFun.forEach(function (item, i) {
            _this.funList_right.forEach(function (item_2) {
                if (item_2.productFunctionId == _this.funList_left[item].productFunctionId) {
                    stu = false;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "请不要选择重复功能" });
                    _this.leftListFun = [];
                }
            });
            if (stu) {
                arrsright.push(item);
                arrsright.sort(function (a, b) { return b - a; });
                _this.funList_right.push(_this.funList_left[item]);
                if (_this.funList_rightlist.length < 10) {
                    _this.funList_rightlist.push(_this.funList_left[item]);
                }
            }
        });
        if (stu) {
            arrsright.forEach(function (item, i) {
                _this.funList_left.splice(item, 1);
            });
            this.funList_right = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.funList_right);
            this.funList_rightlist = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.funList_rightlist);
            temps1 = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.funList_left);
            this.funList_left = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](temps1);
            this.leftListFun = [];
            if (this.funList_right) {
                this.totalg = this.funList_right.length;
            }
            else {
                this.totalg = 0;
            }
        }
    };
    // 功能左移
    BaseProductModifyComponent.prototype.liftFunMovre = function () {
        var _this = this;
        var tempss = [];
        var tempss1 = [];
        var arrsleft = [];
        this.rightListFun.forEach(function (item) {
            arrsleft.push(item);
            arrsleft.sort(function (a, b) { return b - a; });
            _this.funList_left.push(_this.funList_right[item]);
        });
        arrsleft.forEach(function (item, i) {
            _this.funList_right.forEach(function (items, k) {
                if (items.productFunctionId === _this.funList_rightlist[item].productFunctionId) {
                    _this.funList_right.splice(k, 1);
                }
            });
            _this.funList_rightlist.splice(item, 1);
        });
        this.funList_right = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.funList_right);
        this.funList_rightlist = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.funList_rightlist);
        tempss1 = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.funList_left);
        this.funList_left = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](tempss1);
        this.rightListFun = [];
        if (this.funList_right) {
            this.totalg = this.funList_right.length;
        }
        else {
            this.totalg = 0;
        }
    };
    BaseProductModifyComponent.prototype.changeValue = function (item) {
        item.checkBox10 = true;
    };
    // 多行列表全选按钮
    BaseProductModifyComponent.prototype.checkBoxAllClick10 = function () {
        for (var i = 0; i < this.resultListDetail.length; i++) {
            if (this.checkBoxAll10 == true) {
                this.resultListDetail[i].checkBox10 = true;
                this.chooseData10.push(this.resultListDetail[i]);
            }
            else {
                this.chooseData10 = [];
                this.resultListDetail[i].checkBox10 = false;
            }
        }
    };
    // 多行列表单选按钮
    BaseProductModifyComponent.prototype.checkBoxClick10 = function (i, data) {
        var _this = this;
        if (data.checkBox10) {
            this.chooseData10.push(data);
        }
        else {
            this.chooseData10.forEach(function (item, i) {
                if (item == data) {
                    _this.chooseData10.splice(i, 1);
                }
            });
        }
        if (this.chooseData10.length == this.resultListDetail.length) {
            this.checkBoxAll10 = true;
        }
        else {
            this.checkBoxAll10 = false;
        }
    };
    // 单行列表全选按钮
    BaseProductModifyComponent.prototype.checkAllClickA = function (item) {
        if (item.checkDate) {
            if (item.configLevelValue == '0') {
                if (item.productFeatures.length > 1) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: item.productFeatureTypeId + "属性为模板级仅选一个属性值" });
                    item.checkDate = false;
                    return;
                }
                else {
                    item.checkBox10 = true;
                }
            }
            else {
                item.checkBox10 = true;
            }
        }
        else {
            item.checkBox10 = false;
        }
        for (var i = 0; i < item.productFeatures.length; i++) {
            if (item['checkDate'] == true) {
                item.productFeatures[i].checkBox = true;
                this.chooseData.push(item.productFeatures[i]);
            }
            else {
                this.chooseData = [];
                item.productFeatures[i].checkBox = false;
            }
        }
    };
    // 单行列表单选按钮
    BaseProductModifyComponent.prototype.checkBoxClickA = function (i, data, item) {
        var _this = this;
        var arr = [];
        item.productFeatures.forEach(function (itemC, i) {
            if (itemC.checkBox) {
                arr.push(i);
            }
        });
        if (item.configLevelValue == '0') {
            if (arr.length > 1) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: item.productFeatureTypeId + "属性为模板级仅选一个属性值" });
                data.checkBox = false;
                return;
            }
        }
        if (data.checkBox) {
            item.checkBox10 = true;
            this.chooseData.push(data);
        }
        else {
            this.chooseData.forEach(function (item, i) {
                if (item == data) {
                    _this.chooseData.splice(i, 1);
                }
            });
        }
        if (arr.length == item.productFeatures.length) {
            item['checkDate'] = true;
        }
        else {
            item['checkDate'] = false;
        }
    };
    BaseProductModifyComponent.prototype.severNClick = function () {
        var _this = this;
        this.iscompeled = true;
        this.bpcBean.productGroup = this.group_value;
        this.bpcBean.productGroupId = this.group_value;
        this.bpcBean.productTypeId = 'SELL_PRODUCT';
        console.log(this.bpcBean);
        var pram = { paramsMap: this.bpcBean };
        // 提交服务
        this.productManageHttpService.updateBaseProduct(pram).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                var this_3 = _this;
                setTimeout(function () {
                    this_3.router.navigate(['/pages/tzb/product-manage/base-product/base-product-view']);
                    this.iscompeled = false;
                }, 1000);
            }
            else {
                _this.iscompeled = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.iscompeled = false;
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    BaseProductModifyComponent.prototype.ceshi = function () {
    };
    // 是否展开组件框
    BaseProductModifyComponent.prototype.openClick = function () {
        if (this.vlaueOpen == 'open') {
            this.vlaueOpen = 'down';
        }
        else {
            this.vlaueOpen = 'open';
        }
    };
    // 是否展开功能框
    BaseProductModifyComponent.prototype.openClickf = function () {
        if (this.vlaueOpenf == 'open') {
            this.vlaueOpenf = 'down';
        }
        else {
            this.vlaueOpenf = 'open';
        }
    };
    //  //点击组件属性查看
    BaseProductModifyComponent.prototype.resultfClick = function (i, col, item) {
        var _this = this;
        if (this.checka == 0) { // 是否为第一次进入，第一次进入不用先保存
            this.shows = col.functionName;
            this.checka++;
        }
        else { // 不是第一次
            // 先保存
            this.fucntionContentList.forEach(function (itemse, k) {
                if (_this.shows == itemse.functionName) {
                    if (item == 'pay') {
                        if (_this.paymentMethodList.length > 0) {
                            _this.fucntionContentList[k].paymentMethodTypeList = [];
                            _this.paymentMethodList.forEach(function (item) {
                                if (item.show == 'Y') {
                                    _this.fucntionContentList[k].paymentMethodTypeList.push({
                                        paymentMethodTypeName: item.paymentMethodTypeName,
                                        paymentMethodTypeId: item.paymentMethodTypeId,
                                    });
                                }
                            });
                        }
                        if (_this.cars_paytool.length > 0) {
                            _this.fucntionContentList[k].contentList = _this.cars_paytool;
                        }
                        else {
                            _this.fucntionContentList[k].contentList = [];
                        }
                    }
                    else if (item == 'survey') {
                        if (_this.surveyApplTypeList && _this.surveyApplTypeList.length > 0) {
                            if (_this.fucntionContentList[k].surveyOptionList.length > 0) {
                                _this.fucntionContentList[k].surveyOptionList[0]['questonList'] = _this.surveyApplTypeList;
                            }
                            else {
                                _this.fucntionContentList[k].surveyOptionList.push({
                                    questonList: _this.surveyApplTypeList
                                });
                            }
                        }
                        else {
                            if (_this.fucntionContentList[k].surveyOptionList.length > 0) {
                                _this.fucntionContentList[k].surveyOptionList[0]['questonList'] = [];
                            }
                            else {
                                _this.fucntionContentList[k].surveyOptionList.push({
                                    questonList: []
                                });
                            }
                        }
                    }
                }
            });
            this.fucntionContentList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.fucntionContentList);
            this.shows = col.functionName;
        }
        // 回显
        if (item == 'pay') {
            this.paymentMethodList.forEach(function (items) {
                items.show = 'N';
            });
            this.paymentMethodList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.paymentMethodList);
            this.paymentMethodList.forEach(function (items) {
                col.paymentMethodTypeList.forEach(function (item) {
                    if (items.paymentMethodTypeId == item.paymentMethodTypeId) {
                        items.show = 'Y';
                    }
                });
            });
            this.cars_paytool = col.contentList;
            this.paymentMethodList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.paymentMethodList);
            this.cars_paytool = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_paytool);
        }
        else if (item == 'survey') {
            if (col.surveyOptionList.length > 0) {
                this.surveyApplTypeList = col.surveyOptionList[0].questonList;
            }
            else {
                this.surveyApplTypeList = [];
            }
            this.surveyApplTypeList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.surveyApplTypeList);
        }
    };
    BaseProductModifyComponent.prototype.refresh = function () {
        this.thruDate = null;
    };
    // 新增交付服务
    BaseProductModifyComponent.prototype.addpaytool = function () {
        var _this = this;
        // 验证
        for (var i in this.userformT.controls) {
            this.userformT.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userformT.controls) {
            if (!this.userformT.controls[i].valid) {
                return;
            }
        }
        this.payments = -1;
        if (this.productContentTypeId && this.contentName && this.fromDate) { // && this.thruDate
            var paytool_1 = 0;
            this.cars_paytool.forEach(function (item) {
                if (item.contentName == _this.contentName) {
                    paytool_1++;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "该服务名称已存在!" });
                }
            });
            if (paytool_1 == 0) {
                this.cars_paytool.push({
                    productContentTypeId: this.productContentTypeId,
                    contentName: this.contentName,
                    fromDate: this.commfunc.transDateN(this.fromDate),
                    thruDate: this.commfunc.transDateN(this.thruDate)
                });
                this.productContentTypeId = '';
                this.contentName = '';
                this.thruDate = null;
                this.fromDate = null;
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "信息填写完整!" });
        }
        this.cars_paytool = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_paytool);
    };
    // 点击交付服务列表的方法
    BaseProductModifyComponent.prototype.handRowSelect = function (event) {
        var _this = this;
        this.productContentTypeId = event.data.productContentTypeId;
        this.contentName = event.data.contentName;
        this.fromDate = new Date(event.data.fromDate);
        if (event.data.thruDate) {
            this.thruDate = new Date(event.data.thruDate);
        }
        else {
            this.thruDate = null;
        }
        this.cars_paytool.forEach(function (i, item) {
            if (i.contentName == _this.contentName) {
                _this.payments = item;
            }
        });
    };
    // 修改交付服务
    BaseProductModifyComponent.prototype.modifypaytool = function () {
        var _this = this;
        // 验证
        for (var i in this.userformT.controls) {
            this.userformT.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userformT.controls) {
            if (!this.userformT.controls[i].valid) {
                return;
            }
        }
        if (this.productContentTypeId && this.contentName && this.fromDate) { // && this.thruDate
            var paytool_2 = 0;
            this.cars_paytool.forEach(function (item) {
                if (item.contentName == _this.contentName) {
                    paytool_2++;
                }
            });
            if (paytool_2 == 0 || paytool_2 == 1) {
                if (!this.cars_paytool[this.payments]) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: "列表中没有此条信息!" });
                    return;
                }
                this.cars_paytool[this.payments].productContentTypeId = this.productContentTypeId;
                this.cars_paytool[this.payments].contentName = this.contentName;
                this.cars_paytool[this.payments].fromDate = this.commfunc.transDateN(this.fromDate);
                this.cars_paytool[this.payments].thruDate = this.commfunc.transDateN(this.thruDate);
                this.payments = -1;
                this.productContentTypeId = '';
                this.contentName = '';
                this.thruDate = null;
                this.fromDate = null;
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "该服务名称已存在!" });
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "信息填写完整!" });
        }
        this.cars_paytool = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_paytool);
    };
    // 删除交付服务
    BaseProductModifyComponent.prototype.delpaytool = function () {
        var _this = this;
        var payment = 0;
        this.cars_paytool.forEach(function (item) {
            if (item.contentName == _this.contentName) {
                payment++;
            }
        });
        if (payment > 0) {
            this.cars_paytool.splice(this.payments, 1);
            this.productContentTypeId = '';
            this.contentName = '';
            this.thruDate = null;
            this.fromDate = null;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "列表中没有此条信息!" });
        }
        this.cars_paytool = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_paytool);
        this.payments = -1;
    };
    // 个性化（调查项）新增
    BaseProductModifyComponent.prototype.addintelmation = function () {
        this.display = true;
        this.headerTitle = '个性化新增';
        this.showModel = '1';
        this.updateValue = this.surveyApplTypeList;
    };
    // 个性化新增的回调
    BaseProductModifyComponent.prototype.addintelmationCall = function (param) {
        this.display = param.display;
        if (param.list) {
            this.surveyApplTypeList = param.list;
        }
        this.surveyApplTypeList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.surveyApplTypeList);
    };
    // 删除个性化
    BaseProductModifyComponent.prototype.deleteClick = function (item) {
        var checkse = -1;
        this.surveyApplTypeList.forEach(function (items, m) {
            if (item.surveyOptionName == items.surveyOptionName) {
                checkse = m;
            }
        });
        this.surveyApplTypeList.splice(checkse, 1);
        this.surveyApplTypeList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.surveyApplTypeList);
    };
    BaseProductModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base-product-modify',
            template: __webpack_require__(/*! ./base-product-modify.component.html */ "./src/app/pages/tzb/product-manage/base-product/base-product-modify/base-product-modify.component.html"),
            styles: [__webpack_require__(/*! ./base-product-modify.component.scss */ "./src/app/pages/tzb/product-manage/base-product/base-product-modify/base-product-modify.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        })
        /**
         * 基础产品配置
         */
        ,
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["ProductManageHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]])
    ], BaseProductModifyComponent);
    return BaseProductModifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-modify/bean/base-product-modify.bean.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-modify/bean/base-product-modify.bean.ts ***!
  \************************************************************************************************************/
/*! exports provided: BpmBean, ComponentViewBean, ProductFunctionBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpmBean", function() { return BpmBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentViewBean", function() { return ComponentViewBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFunctionBean", function() { return ProductFunctionBean; });
var BpmBean = /** @class */ (function () {
    function BpmBean() {
    }
    return BpmBean;
}());

var ComponentViewBean = /** @class */ (function () {
    function ComponentViewBean() {
        this.pageNum = 1; //当前页
        this.pageSize = 10; //每页显示数量
    }
    return ComponentViewBean;
}());

// 功能分页
var ProductFunctionBean = /** @class */ (function () {
    function ProductFunctionBean() {
        this.productFunctionId = ''; //功能编号
        this.productFunctionName = ''; //功能名称
        this.pageNum = 1; //当前页
        this.pageSize = 10; //每页显示数量
    }
    return ProductFunctionBean;
}());

// export class BpcBean{
//     productGroup:string;          //			产品组
//     productName:string;          //		    	产品名
//     description:string;          //             产品描述
//     productTypeId:string;          //			类型
//     feature:any;                     //			组件列表
//     productFeature:string;          //	    	组件属性列表
//     // productId:string;          //			产品部件名称
//     functionList:any;                          //功能列表
// }
// export class ComponentViewBean{
//     productFeatureCategoryId:string;            //部件Id
//     description:string;          //部件名称     
//     pageNum:number;            //当前页
//     pageSize:number = 10;           //每页显示数量
//     productCategoryLineId:string;          //			产品线Id	String	Y
//     productCategoryGroupId:string;          //			产品组Id	String	Y
//     productCategoryId:string;          //			基础产品Id	String	Y
//     productId:string;          //			可售产品Id	String	Y
// }


/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-modify/surveyApplTypeList-add/surveyApplTypeList-adds.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-modify/surveyApplTypeList-add/surveyApplTypeList-adds.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container module\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g\">\r\n            <form [formGroup]=\"userformb\">\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-4\" style=\"text-align: right;font-weight: bold;\">\r\n                        <label appValidation>属性值类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <div style=\"width:80%\">\r\n                            <p-dropdown name=\"surveyOptionType\" formControlName=\"surveyOptionType\" styleClass=\"ui-dropdown-new\" [(ngModel)]=\"surveyOptionType\"\r\n                                [options]=\"QuestionLists\"></p-dropdown>\r\n                        </div>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformb.controls['surveyOptionType'].valid&&userformb.controls['surveyOptionType'].dirty\">\r\n                            <span [hidden]=\"!userformb.hasError('required','surveyOptionType')\"> 请选择属性值类型！</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-4\" style=\"text-align: right;font-weight: bold;\">\r\n                        <label appValidation>属性名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <input type=\"text\" maxlength=\"60\" name=\"surveyOptionName\" formControlName=\"surveyOptionName\" [(ngModel)]=\"surveyOptionName\"\r\n                            pInputText class=\"ui-inputtext-new\" style=\"width:80%\">\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformb.controls['surveyOptionName'].valid&&userformb.controls['surveyOptionName'].dirty\">\r\n                            <span [hidden]=\"!userformb.hasError('required','surveyOptionName')\"> 请选择属性名称！</span>\r\n                            <span [hidden]=\"!userformb.hasError('pattern','surveyOptionName')\"> 不可以输入空格或者特殊字符！</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-4\" style=\"text-align: right;font-weight: bold;\">\r\n                        <label appValidation>属性描述:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <input type=\"text\" maxlength=\"200\" name=\"surveyOptionDesc\" formControlName=\"surveyOptionDesc\" [(ngModel)]=\"surveyOptionDesc\"\r\n                            pInputText class=\"ui-inputtext-new\" style=\"width:80%\">\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformb.controls['surveyOptionDesc'].valid&&userformb.controls['surveyOptionDesc'].dirty\">\r\n                            <span [hidden]=\"!userformb.hasError('required','surveyOptionDesc')\"> 请选择属性名称！</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-4\" style=\"text-align: right;font-weight: bold;\">\r\n                        <label>属性分页:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <input type=\"number\" maxlength=\"2\" name=\"pageNum\" formControlName=\"pageNum\" [(ngModel)]=\"pageNum\" pInputText class=\"ui-inputtext-new\" style=\"width:80%\">\r\n                        <!-- <input type=\"text\" maxlength=\"2\" name=\"pageNum\" formControlName=\"pageNum\" [(ngModel)]=\"pageNum\" pInputText class=\"ui-inputtext-new\"\r\n                            style=\"width:80%\"> -->\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userformb.controls['pageNum'].valid&&userformb.controls['pageNum'].dirty\">\r\n                            <span [hidden]=\"!userformb.hasError('pattern','pageNum')\"> 属性分页为1~10的数字！</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-md-4\" style=\"text-align: right;font-weight: bold;\">\r\n                        <label>必输:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <div style=\"width:80%\">\r\n                            <p-dropdown styleClass=\"ui-dropdown-new\" name=\"requiredField\" formControlName=\"requiredField\" [(ngModel)]=\"requiredField\"\r\n                                [options]=\"isMybankCust\"></p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 \" style=\"text-align:center;\">\r\n        <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn2-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton type=\"button\" (click)=\"canel()\" label=\"取消\" style=\"width: 60px;\"></button>\r\n            </div>\r\n        </div>\r\n        <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn1-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton type=\"button\" (click)=\"serve()\" label=\"确定\" style=\"width: 60px;\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-modify/surveyApplTypeList-add/surveyApplTypeList-adds.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-modify/surveyApplTypeList-add/surveyApplTypeList-adds.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: SurveyApplTypeListAddsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyApplTypeListAddsComponent", function() { return SurveyApplTypeListAddsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SurveyApplTypeListAddsComponent = /** @class */ (function () {
    function SurveyApplTypeListAddsComponent(productManageHttpService, commfunc, fb) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inValue = [];
        // 提示信息
        this.msgs = [];
        this.QuestionLists = [
            {
                label: '请选择',
                value: ''
            },
        ]; // 调查项值类型列表
        // 模态框
        this.display = false;
        this.pageName = '';
        this.requiredField = '';
        this.pageNum = '';
        this.isMybankCust = []; // 是否必输
        this.codeValues(); // 调用方法，获取全部码值
        this.isMybankCust = this.code['isMybankCust'];
        this.userformb = fb.group({
            'pageNum': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[1-9]\d*$/)]),
            'surveyOptionType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'surveyOptionName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'surveyOptionDesc': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'requiredField': [''],
        });
    }
    SurveyApplTypeListAddsComponent.prototype.ngOnInit = function () {
        this.queryQuestionType();
    };
    // 码值
    SurveyApplTypeListAddsComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // 属性值类型
    SurveyApplTypeListAddsComponent.prototype.queryQuestionType = function () {
        var _this = this;
        this.productManageHttpService.queryQuestionType({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var obj = data.questionTypeMap;
                for (var key in obj) {
                    _this.QuestionLists.push({
                        label: obj[key],
                        value: key,
                    });
                }
                _this.QuestionLists = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](_this.QuestionLists);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 完成
    SurveyApplTypeListAddsComponent.prototype.serve = function () {
        var _this = this;
        // 验证
        for (var i in this.userformb.controls) {
            this.userformb.controls[i].markAsDirty();
        }
        // 处理是否提交
        for (var i in this.userformb.controls) {
            if (!this.userformb.controls[i].valid) {
                return;
            }
        }
        if (this.pageNum) {
            var pageNums = Number(this.pageNum);
            if (pageNums > 10) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "属性分页不可大于10！" });
                return;
            }
        }
        var checks = 0;
        if (this.inValue && this.inValue.length > 0) {
            this.inValue.forEach(function (item) {
                if (item.surveyOptionName === _this.surveyOptionName) {
                    checks++;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "属性名称已存在!" });
                }
            });
        }
        else {
            this.inValue = [];
        }
        if (checks === 0) {
            this.inValue.push({
                surveyOptionType: this.surveyOptionType,
                surveyOptionName: this.surveyOptionName,
                surveyOptionDesc: this.surveyOptionDesc,
                pageNum: this.pageNum,
                requiredField: this.requiredField,
            });
            this.inValue = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.inValue);
            console.log(this.inValue);
            var parm = {
                display: false,
                list: this.inValue,
            };
            this.outValue.emit(parm);
        }
    };
    SurveyApplTypeListAddsComponent.prototype.canel = function () {
        var parm = {
            display: false,
        };
        this.outValue.emit(parm);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SurveyApplTypeListAddsComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SurveyApplTypeListAddsComponent.prototype, "inValue", void 0);
    SurveyApplTypeListAddsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-surveyApplTypeList-add',
            template: __webpack_require__(/*! ./surveyApplTypeList-adds.component.html */ "./src/app/pages/tzb/product-manage/base-product/base-product-modify/surveyApplTypeList-add/surveyApplTypeList-adds.component.html"),
            styleUrls: [],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SurveyApplTypeListAddsComponent);
    return SurveyApplTypeListAddsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-product-view.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-view/base-product-view.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <ul class=\"ui-breadcrumb-new\">\r\n        <li class=\"active\">\r\n          <a>\r\n            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n        </li>\r\n        <li>\r\n          <a>产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>基础产品管理</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12 ui-md-12 module\">\r\n      <div class=\"ui-g-12 ui-md-12 form_item\">\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"height: 40px;line-height: 35px\">\r\n            <span>产品线:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2\">\r\n            <div style=\"width:75%;\">\r\n              <p-dropdown styleClass=\"ui-dropdown-new\" [(ngModel)]=\"line_value\" (onChange)=\"lineVelue()\" [options]=\"select_line\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"height: 40px;line-height: 35px\">\r\n            <span>产品组:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2\">\r\n            <div style=\"width:75%;\">\r\n              <p-dropdown styleClass=\"ui-dropdown-new\" [(ngModel)]=\"group_value\" [options]=\"select_group\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"height: 40px;line-height: 35px\">\r\n            <span>产品状态:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2\">\r\n            <div style=\"width:75%;\">\r\n              <p-dropdown styleClass=\"ui-dropdown-new\" [(ngModel)]=\"basicVBean.status\" [options]=\"statuse\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"height: 40px;line-height: 35px\">\r\n            <span>基础产品编号:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2\">\r\n            <input [(ngModel)]=\"basicVBean.productId\" type=\"text\" pInputText class=\"ui-inputtext-new\" style=\"width:75%\">\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"height: 40px;line-height: 35px\">\r\n            <span>基础产品名称:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2\">\r\n            <input [(ngModel)]=\"basicVBean.productName\" type=\"text\" pInputText class=\"ui-inputtext-new\" style=\"width:75%\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn1-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" (click)=\"querySecle()\" style=\"width: 60px;\" label=\"查询\"></button>\r\n            </div>\r\n          </div>\r\n          <span>&nbsp;</span>\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn2-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" style=\"width: 60px;\" (click)=\"resetClick()\" label=\"重置\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 module emargin\">\r\n      <div class=\"ui-g-12 ui-md-12 text_right\" *ngIf=\"permissionCheck('SID03006_P053') || permissionCheck('SID23006_P053')\">\r\n        <div style=\"width: 90px;display: inline-block;\">\r\n          <div class=\"ui-btn1-div\">\r\n            <p class=\"place-div first\"></p>\r\n            <p class=\"place-div last\"></p>\r\n            <span pButton type=\"button\" [routerLink]=\"['/pages/tzb/product-manage/base-product/base-product-config']\" style=\"width: 60px;\"\r\n              label=\"新增\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12\">\r\n        <u-dataTable [value]=\"cars_2\" emptyMessage=\"没有查找到数据\" [scrollable]=\"true\" scrollHeight=\"500px\" [style]=\"{'text-align':'center'}\">\r\n          <p-column [style]=\"{'text-align':'center'}\">\r\n            <ng-template pTemplate=\"header\">\r\n              <span>序号</span>\r\n            </ng-template>\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <span>{{ri+1}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'14%'}\" field=\"productId\" header=\"基础产品编号\">\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'14%'}\" field=\"productName\" header=\"基础产品名称\">\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'14%'}\" field=\"productLineName\" header=\"产品线\">\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'14%'}\" field=\"productGroupName\" header=\"产品组\">\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'14%'}\" header=\"产品状态\">\r\n            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <!-- {{col.fromStatus|codeValuePie:baseProductType}}-->\r\n              {{col.fromStatus|codeValuePie:statuse}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'20%'}\">\r\n            <ng-template pTemplate=\"header\">\r\n              <label>操作</label>\r\n            </ng-template>\r\n            <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <span class=\"icon iconfont\" pTooltip=\"详情\" tooltipPosition=\"top\" (click)=\"basicDetails(item)\" style=\"color:#34cfe6;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\"\r\n                *ngIf=\"permissionCheck('SID03006_P054') || permissionCheck('SID23006_P054')\">&#xe679;</span>\r\n              <span (click)=\"serveClick(item)\" class=\"icon iconfont\" pTooltip=\"审批\" tooltipPosition=\"top\" style=\"color:#be67f5;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\"\r\n                *ngIf=\"permissionCheck('SID03006_P057') || permissionCheck('SID23006_P057')\">&#xe65c;</span>\r\n              <span class=\"icon iconfont\" pTooltip=\"修改\" tooltipPosition=\"top\" [routerLink]=\"['/pages/tzb/product-manage/base-product/base-product-modify',item]\"\r\n                style=\"color:#87d068;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\" *ngIf=\"(permissionCheck('SID03006_P055') || permissionCheck('SID23006_P055')) && item.fromStatus != '01' && item.fromStatus != '04'\">&#xe63b;</span>\r\n              <span class=\"icon iconfont\" pTooltip=\"修改\" tooltipPosition=\"top\" style=\"color:#ccc;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\"\r\n                *ngIf=\"(permissionCheck('SID03006_P055') || permissionCheck('SID23006_P055')) && (item.fromStatus == '01' || item.fromStatus == '04')\">&#xe63b;</span>\r\n              <span class=\"icon iconfont\" pTooltip=\"删除\" tooltipPosition=\"top\" (click)=\"deleteClick(item)\" style=\"color:#fe5a48;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\"\r\n                *ngIf=\"permissionCheck('SID03006_P056') || permissionCheck('SID23006_P056')\">&#xe673;</span>\r\n              <span *ngIf=\"item.fromStatus != '02'\" pTooltip=\"状态调整\" tooltipPosition=\"top\" class=\"icon iconfont\" style=\"color:#ccc;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe613;</span>\r\n              <span (click)=\"serveClicks(item)\" *ngIf=\"item.fromStatus == '02'\" pTooltip=\"状态调整\" tooltipPosition=\"top\" class=\"icon iconfont\"\r\n                style=\"color:#19b0c8;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe613;</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </u-dataTable>\r\n        <div style=\"float:right;padding-top:100px;\">\r\n          <u-paginator [first]=\"first\" rows=\"{{basicVBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></u-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 删除提示框-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <app-base-view-details *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-base-view-details>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-product-view.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-view/base-product-view.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .emargin {\n  margin: 10px 0; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n.overflow {\n  max-height: 700px;\n  overflow: scroll;\n  overflow-x: hidden; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1200px !important;\n  height: 80% !important;\n  min-height: 760px !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2Jhc2UtcHJvZHVjdC9iYXNlLXByb2R1Y3Qtdmlldy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxcYmFzZS1wcm9kdWN0XFxiYXNlLXByb2R1Y3Qtdmlld1xcYmFzZS1wcm9kdWN0LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFRUSxjQUFjLEVBQUE7O0FBUnRCO0VBV1EseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFRdEI7RUFDSSx3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFHUSx5QkFBeUIsRUFBQTs7QUFJakM7RUFDSSxlQUFlLEVBQUE7O0FBRG5CO0lBR1EseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUdRLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2Jhc2UtcHJvZHVjdC9iYXNlLXByb2R1Y3Qtdmlldy9iYXNlLXByb2R1Y3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgLnRleHRfY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuZW1hcmdpbiB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICAgOmhvc3QgL2RlZXAvIC5mb3JtX2l0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vdmVyZmxvdyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi8vIDpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuLy8gICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDEyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA4MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDc2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLWRhdGEgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHIge1xyXG4gICAgYmFja2dyb3VuZDogI2Q3ZDdkNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldyAuYWN0aXZlIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIHVsLnVpLWJyZWFkY3J1bWItbmV3IGxpIDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-product-view.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-view/base-product-view.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: BaseProductViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseProductViewComponent", function() { return BaseProductViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _bean_base_product_view_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/base-product-view.bean */ "./src/app/pages/tzb/product-manage/base-product/base-product-view/bean/base-product-view.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 基础产品-查询 熊正好 2019.3.25



 // 删除


var BaseProductViewComponent = /** @class */ (function () {
    function BaseProductViewComponent(productManageHttpService, confirmationService, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; // 列表无数据
        // bean
        this.basicVBean = new _bean_base_product_view_bean__WEBPACK_IMPORTED_MODULE_2__["BasicVBean"]();
        // 组件的参数
        this.updateValue = [];
        // 提示信息
        this.msgs = [];
        // 头部标题
        this.all_title = '基础产品管理';
        this.select_1 = []; // 默认下拉
        this.select_line = []; // 产品线下拉
        this.select_group = []; // 产品组下拉
        this.line_value = [{
                productCategoryId: ''
            }]; // 产品线下拉值
        this.isdisabled = true;
        this.display = false;
        // 每页多少条
        this.pageSize = 10;
        // 分页控制
        this.first = 0;
        this.statuse = []; // 产品线下拉
        this.codeValues(); // 调用方法，获取全部码值
        this.baseProductType = this.code['BaseProductType'];
        this.statuse = this.code['fromStatusList'];
    }
    BaseProductViewComponent.prototype.ngOnInit = function () {
        var session = window.sessionStorage;
        if (session.getItem('para')) {
            session.removeItem('para');
        }
        this.select_1 = [
            { label: '请选择', value: " " },
        ];
        this.select_line = [
            { label: '请选择', value: " " },
        ];
        this.select_group = [
            { label: '请先选择产品线', value: " " },
        ];
        // this.statuse = [
        // 	{ label: '请选择', value: "" },
        // 	{ label: '待生效', value: "00" },
        // 	{ label: '待复核', value: "01" },
        // 	{ label: '已生效', value: "02" },
        // 	{ label: '待删除', value: "04" },
        // 	{ label: '升级中', value: "06" },
        // ];
        this.first = 0;
        this.queryClick();
        this.line_query();
    };
    // 码值
    BaseProductViewComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // 重置
    BaseProductViewComponent.prototype.resetClick = function () {
        this.line_value = '';
        this.group_value = '';
        this.basicVBean = new _bean_base_product_view_bean__WEBPACK_IMPORTED_MODULE_2__["BasicVBean"]();
        this.group_query();
    };
    // 查询始终第一页
    BaseProductViewComponent.prototype.querySecle = function () {
        this.basicVBean.pageSize = 10;
        this.basicVBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    // 查询
    BaseProductViewComponent.prototype.queryClick = function () {
        var _this = this;
        this.basicVBean.productLineId = this.line_value.productCategoryId;
        this.basicVBean.productGroupId = this.group_value;
        this.productManageHttpService.getBaseProduct(this.basicVBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.cars_2 = data.resultList;
                _this.total = data.total;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    BaseProductViewComponent.prototype.basicDetails = function (item) {
        this.display = true;
        this.headerTitle = '基础产品详情';
        this.showModel = '1';
        this.updateValue = item.productId;
    };
    BaseProductViewComponent.prototype.detailsCall = function (param) {
        this.display = param;
    };
    // 删除
    BaseProductViewComponent.prototype.deleteClick = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                // 条件
                var param = { baseProductId: item.productId };
                _this.productManageHttpService.deleteBaseProduct(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.first = 0;
                        _this.queryClick();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
                });
            }
        });
    };
    // 分页
    BaseProductViewComponent.prototype.paginate = function (event) {
        // 每页显示的条数
        this.basicVBean.pageSize = event.rows;
        // 当前页
        var currentPage = event.page + 1;
        this.basicVBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.basicVBean.pageSize;
        // 调用查询的方法
        this.queryClick();
        this.basicVBean.pageNum = 1;
    };
    // 产品线下拉
    BaseProductViewComponent.prototype.line_query = function () {
        var _this = this;
        this.basicVBean = new _bean_base_product_view_bean__WEBPACK_IMPORTED_MODULE_2__["BasicVBean"]();
        this.productManageHttpService.productLinePull(this.basicVBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.productLineList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.categoryName;
                    obj['value'] = item;
                    _this.select_line.push(obj);
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 产品组修改
    BaseProductViewComponent.prototype.lineVelue = function () {
        this.select_group = [
            { label: '请先选择产品线', value: "" },
        ];
        this.group_value = '';
        this.group_query();
    };
    // 产品组下拉
    BaseProductViewComponent.prototype.group_query = function () {
        var _this = this;
        var parm = { productLineId: this.line_value.productCategoryId };
        this.productManageHttpService.productGroupPull(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.productGroupList.forEach(function (item) {
                    var obj = {};
                    obj['label'] = item.categoryName;
                    obj['value'] = item.productCategoryId;
                    _this.select_group.push(obj);
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 按钮权限
    BaseProductViewComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    // 提交
    BaseProductViewComponent.prototype.serveClick = function (item) {
        var _this = this;
        if (this.isdisabled == true) {
            this.isdisabled = false;
            this.confirmationService.confirm({
                message: '确认要提交吗?',
                accept: function () {
                    var dataA = {
                        productId: item.productId
                    };
                    _this.productManageHttpService.startWorkFlowLaunchForProduct(dataA).subscribe(function (data) {
                        if (data.returnCode.code == "success") {
                            _this.queryClick();
                            _this.isdisabled = true;
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        }
                        else {
                            _this.isdisabled = true;
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                        }
                    }, function (error) {
                        _this.isdisabled = true;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                    });
                },
                reject: function () {
                    _this.isdisabled = true;
                }
            });
        }
    };
    // 状态调整
    BaseProductViewComponent.prototype.serveClicks = function (item) {
        var _this = this;
        if (this.isdisabled == true) {
            this.isdisabled = false;
            this.confirmationService.confirm({
                message: '确认要调整状态吗?',
                accept: function () {
                    var dataA = {
                        productId: item.productId,
                        productType: 'BASIC_PRODUCT',
                        statusId: '06'
                    };
                    _this.productManageHttpService.updateProductStatus(dataA).subscribe(function (data) {
                        if (data.returnCode.code == "success") {
                            _this.queryClick();
                            _this.isdisabled = true;
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        }
                        else {
                            _this.isdisabled = true;
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                        }
                    }, function (error) {
                        _this.isdisabled = true;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                    });
                },
                reject: function () {
                    _this.isdisabled = true;
                }
            });
        }
    };
    BaseProductViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base-product-view',
            template: __webpack_require__(/*! ./base-product-view.component.html */ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-product-view.component.html"),
            styles: [__webpack_require__(/*! ./base-product-view.component.scss */ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-product-view.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], BaseProductViewComponent);
    return BaseProductViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-view-details/base-view-details.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-view/base-view-details/base-view-details.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"ui-g \">\r\n    <div class=\"ui-g-12 ui-md-12 form_item\">\r\n      <p-panel header=\"详情展示\" [toggleable]=\"true\" [collapsed]=\"false\" [style]=\"{'margin-bottom':'20px'}\">\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n            <span>\r\n              基础产品编号:\r\n            </span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4 \">\r\n            <span>{{list.productCategoryId}}</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n            <span>\r\n              基础产品名称:\r\n            </span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4 \">\r\n            <span>{{list.categoryName}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n            <span>\r\n              详细描述:\r\n            </span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-10\" style=\"word-wrap: break-word\">\r\n            <span>{{list.description}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n            <span>创建人:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <span>{{list.createdByUserLogin}}</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n            <span>创建时间:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <span>{{list.createdDate}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n            <span>最后修改人:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <span>{{list.lastModifiedByUserLogin}}</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n            <span>最后修改时间:</span>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-4\">\r\n            <span>{{list.lastModifiedDate}}</span>\r\n          </div>\r\n        </div>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <p-panel header=\"组件展示\" [toggleable]=\"true\" [collapsed]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n        <button class=\"un_active\" *ngFor=\"let col of zujian_ist1;let i = index\" (click)=\"dianji(i,col)\" [ngClass]=\"{'active':showClass == col.productFeatureCategoryName}\">{{col.productFeatureCategoryName}}</button>\r\n        <div *ngFor=\"let col of zujian_ist1;let i = index\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-12\" *ngIf=\"i ==aIndex\">\r\n              <u-dataTable [value]=\"shuxing_ist2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productFeatureTypeId\" header=\"属性编号\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"description\" header=\"属性名称\">\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'25%'}\" header=\"取值范围\">\r\n                  <ng-template pTemplate=\"header\">\r\n                    <label>取值范围</label>\r\n                  </ng-template>\r\n                  <ng-template let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"item.shuxingType==2\">{{item.min}}</span>\r\n                    <span *ngIf=\"item.shuxingType==2\">--</span>\r\n                    <span *ngIf=\"item.shuxingType==2\">{{item.max}}</span>\r\n                    <span *ngIf=\"item.shuxingType==1\">{{item.shuxingmiaoshu}}</span>\r\n                    <span *ngIf=\"item.shuxingType==3\">{{item.def}}</span>\r\n                    <span *ngIf=\"item.shuxingType==61\">{{item.def}}</span>\r\n                    <span *ngIf=\"item.shuxingType==62\">{{item.min}}</span>\r\n                    <span *ngIf=\"item.shuxingType==62\">--</span>\r\n                    <span *ngIf=\"item.shuxingType==62\">{{item.max}}</span>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"configLevel\" header=\"配置级别\">\r\n                  <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.configLevel|codeValuePie:configLevelV}}\r\n                  </ng-template>\r\n                </p-column>\r\n              </u-dataTable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <p-panel header=\"产品功能\" [toggleable]=\"true\" [collapsed]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n        <u-dataTable [value]=\"cars_2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n          <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionId\" header=\"功能编号\">\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center'}\" field=\"productFunctionName\" header=\"功能名称\">\r\n          </p-column>\r\n        </u-dataTable>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <p-panel header=\"支付交付\" [toggleable]=\"true\" [collapsed]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n        <button class=\"un_active\" *ngFor=\"let col of productContentList;let i = index\" (click)=\"resultfClick(i,col,'pay')\" [ngClass]=\"{'active':shows == col.functionName}\">{{col.functionName}}</button>\r\n        <div class=\"ui-g-12 ui-md-12\">\r\n          <div class=\"ui-g-12 ui-md-2 text_right\">\r\n            <label>\r\n              <b>可选支付工具:</b>\r\n            </label>\r\n          </div>\r\n          <div class=\"ui-g-12 ui-md-10\">\r\n            <span style=\"margin: 0px 20px\" *ngFor=\"let col of paymentMethodTypeList;let i = index\">{{col.paymentMethodTypeName}}</span>\r\n          </div>\r\n        </div>\r\n        <u-dataTable [value]=\"cars_3\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n          <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"productContentTypeId\" header=\"交付服务类型\">\r\n            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              {{col.productContentTypeId|codeValuePie:resultListAllse}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"contentName\" header=\"交付服务名称\"></p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"fromDate\" header=\"生效时间\"></p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'25%'}\" field=\"thruDate\" header=\"失效时间\"></p-column>\r\n        </u-dataTable>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n      <p-panel header=\"个性化信息\" [toggleable]=\"true\" [collapsed]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n        <button class=\"un_active\" *ngFor=\"let col of productContentList;let i = index\" (click)=\"resultfClick(i,col,'survey')\" [ngClass]=\"{'active':shows1 == col.functionName}\">{{col.functionName}}</button>\r\n        <u-dataTable [value]=\"cars_4\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n          <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"surveyOptionType\" header=\"属性值类型\">\r\n            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              {{col.surveyOptionType|codeValuePie:QuestionLists}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"surveyOptionName\" header=\"属性名称\"></p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"surveyOptionDesc\" header=\"属性描述\">\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n              <span *ngIf=\"item.surveyOptionDesc && item.surveyOptionDesc.length>9\">{{item.surveyOptionDesc.substring(0,9)}}...</span>\r\n              <span *ngIf=\"item.surveyOptionDesc && item.surveyOptionDesc.length<10\">{{item.surveyOptionDesc}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"requiredField\" header=\"必输\">\r\n            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              {{col.requiredField|codeValuePie:isMybankCust}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width':'20%'}\" field=\"pageNum\" header=\"属性分页\"></p-column>\r\n        </u-dataTable>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <span pButton type=\"button\" (click)=\"closeClick()\" style=\"width: 60px;\" label=\"关闭\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-view-details/base-view-details.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-view/base-view-details/base-view-details.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .text_right label {\n    font-weight: bold; }\n\n.container .box ul {\n  clear: both; }\n\n.container .box ul li {\n    float: left;\n    list-style-type: none;\n    margin: 10px 6px; }\n\n.container .un_active {\n  padding: 6px;\n  border: none !important;\n  background-color: #CFCACA;\n  border-radius: 6px;\n  color: white;\n  margin: 10px 10px;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 16px; }\n\n.container .active {\n  padding: 6px;\n  border: none !important;\n  background-color: #0094D2;\n  border-radius: 6px;\n  color: white;\n  margin: 10px 10px;\n  outline: none;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 16px; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL2Jhc2UtcHJvZHVjdC9iYXNlLXByb2R1Y3Qtdmlldy9iYXNlLXZpZXctZGV0YWlscy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxcYmFzZS1wcm9kdWN0XFxiYXNlLXByb2R1Y3Qtdmlld1xcYmFzZS12aWV3LWRldGFpbHNcXGJhc2Utdmlldy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0lBT1ksaUJBQWlCLEVBQUE7O0FBUDdCO0VBWVksV0FBVyxFQUFBOztBQVp2QjtJQWNnQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBOztBQWhCaEM7RUFxQlEsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQTlCdkI7RUFpQ1EsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQTFDdkI7RUE2Q1EseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvYmFzZS1wcm9kdWN0L2Jhc2UtcHJvZHVjdC12aWV3L2Jhc2Utdmlldy1kZXRhaWxzL2Jhc2Utdmlldy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICAudGV4dF9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ib3gge1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51bl9hY3RpdmUge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZDQUNBO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NEQyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgICA6aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-view-details/base-view-details.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-view/base-view-details/base-view-details.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: BaseViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseViewDetailsComponent", function() { return BaseViewDetailsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _bean_base_product_view_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../bean/base-product-view.bean */ "./src/app/pages/tzb/product-manage/base-product/base-product-view/bean/base-product-view.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BaseViewDetailsComponent = /** @class */ (function () {
    function BaseViewDetailsComponent(productManageHttpService, route, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.route = route;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; // 列表无数据
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // 实体
        this.basicVBean = new _bean_base_product_view_bean__WEBPACK_IMPORTED_MODULE_3__["BasicVBean"]();
        this.list = [];
        // 提示信息
        this.msgs = [];
        this.zujian_ist1 = [];
        this.shuxing_ist2 = [];
        this.aIndex = 0;
        this.cars_right = []; // 属性列表
        this.cars_attrbute = []; // 属性列表
        this.arrrs = [];
        this.paymentMethodTypeList = [];
        this.productContentList = [];
        this.resultListAllse = [
            { 'label': '请选择', 'value': '' },
        ];
        this.QuestionLists = [];
        this.isMybankCust = []; // 是否必输
        this.vlaueOpenf = 'open';
        this.isMybank = [];
        this.codeValues(); // 调用方法，获取全部码值
        this.configLevelV = this.code['configLevel'];
        this.functionTypeV = this.code['functionTypes'];
        this.isMybank = this.code['isMybankCust'];
        this.isMybankCust = this.isMybank.splice(1);
    }
    BaseViewDetailsComponent.prototype.ngOnInit = function () {
        if (!this.inValue) {
            this.queryEvent();
        }
        this.queryContentType();
        this.queryQuestionType();
    };
    BaseViewDetailsComponent.prototype.ngOnChanges = function () {
        this.queryEvent();
    };
    // 码值
    BaseViewDetailsComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // 交付服务类型下拉列表查询
    BaseViewDetailsComponent.prototype.queryContentType = function () {
        var _this = this;
        this.productManageHttpService.queryContentType({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.resultListAllse = [
                    { 'label': '请选择', 'value': '' },
                ];
                var obj = data.contentTypeMap;
                for (var key in obj) {
                    _this.resultListAllse.push({
                        label: obj[key],
                        value: key,
                    });
                }
                _this.resultListAllse = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.resultListAllse);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 属性值类型
    BaseViewDetailsComponent.prototype.queryQuestionType = function () {
        var _this = this;
        this.productManageHttpService.queryQuestionType({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.QuestionLists = [];
                var obj = data.questionTypeMap;
                for (var key in obj) {
                    _this.QuestionLists.push({
                        label: obj[key],
                        value: key,
                    });
                }
                _this.QuestionLists = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.QuestionLists);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 关闭
    BaseViewDetailsComponent.prototype.closeClick = function () {
        this.outValue.emit(false);
    };
    BaseViewDetailsComponent.prototype.queryEvent = function () {
        var _this = this;
        if (!this.inValue) {
            this.param = {
                baseProductId: this.route.snapshot.params['baseProductId'],
                status: this.route.snapshot.params['status']
            };
        }
        else {
            this.param = { baseProductId: this.inValue };
        }
        // 组件属性查询
        this.productManageHttpService.getBaseProductDetails(this.param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.list = data.productCategory; // 详情展示
                var created = new Date(_this.list.createdDate);
                _this.list.createdDate = _this.commfunc.transDateN(created);
                var lastModified = new Date(_this.list.lastModifiedDate);
                _this.list.lastModifiedDate = _this.commfunc.transDateN(lastModified);
                _this.cars_2 = data.productFunctionList; // 功能查询
                _this.zujian_ist1 = data.productFeatureCategoryList; // 组件展示
                _this.shuxing_ist2 = data.productFeatureCategoryList[0].productFeatureTypeList; //属性展示
                _this.dianji(0, _this.zujian_ist1[0]);
                _this.productContentList = data.productContentList;
                _this.productContentList.forEach(function (items, i) {
                    items.contentList.forEach(function (itemse, k) {
                        var fromd = new Date(itemse.fromDate);
                        _this.productContentList[i].contentList[k].fromDate = _this.commfunc.transDateN(fromd);
                        if (itemse.thruDate) {
                            var thrud = new Date(itemse.thruDate);
                            _this.productContentList[i].contentList[k].thruDate = _this.commfunc.transDateN(thrud);
                        }
                        else {
                            _this.productContentList[i].contentList[k].thruDate = '';
                        }
                        // let thrud = new Date(itemse.thruDate);
                        // this.productContentList[i].contentList[k].thruDate = this.commfunc.transDateN(thrud);
                    });
                });
                _this.productContentList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.productContentList);
                _this.resultfClick(0, _this.productContentList[0], 'pay');
                _this.resultfClick(0, _this.productContentList[0], 'survey');
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    BaseViewDetailsComponent.prototype.dianji = function (i, item) {
        this.showClass = item.productFeatureCategoryName;
        var arrayN = [];
        this.aIndex = i;
        this.shuxing_ist2 = this.zujian_ist1[i].productFeatureTypeList;
        this.shuxing_ist2.forEach(function (item) {
            if (item.featureType == '01') {
                item.shuxingType = 1;
                item.productFeatureList.forEach(function (items) {
                    arrayN.push(items.productFeatureDesc);
                });
                item.shuxingmiaoshu = arrayN.join(",");
                arrayN = [];
            }
            if (item.featureType == '02') {
                item.shuxingType = 2;
                item.productFeatureList.forEach(function (items) {
                    if (items.valueType == '05') {
                        item.shuxingType = 3;
                        item.def = items.def;
                    }
                    else if (items.valueType == '06') {
                        if (item.configLevel == "0") {
                            item.shuxingType = 61;
                            item.def = items.def;
                        }
                        else {
                            item.shuxingType = 62;
                            item.min = items.min;
                            item.max = items.max;
                        }
                    }
                    else {
                        item.min = items.min;
                        item.max = items.max;
                    }
                });
            }
        });
    };
    //  //点击组件属性查看
    BaseViewDetailsComponent.prototype.resultfClick = function (i, col, item) {
        // 回显
        if (item == 'pay') {
            this.shows = col.functionName;
            this.paymentMethodTypeList = col.paymentMethodTypeList;
            this.cars_3 = col.contentList;
            this.paymentMethodTypeList = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.paymentMethodTypeList);
            this.cars_3 = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_3);
        }
        else if (item == 'survey') {
            this.shows1 = col.functionName;
            this.cars_4 = col.surveyOptionList[0].questonList;
            this.cars_4 = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.cars_4);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], BaseViewDetailsComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BaseViewDetailsComponent.prototype, "outValue", void 0);
    BaseViewDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-view-details',
            template: __webpack_require__(/*! ./base-view-details.component.html */ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-view-details/base-view-details.component.html"),
            styles: [__webpack_require__(/*! ./base-view-details.component.scss */ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-view-details/base-view-details.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        })
        /**
         * 基础产品详情
         */
        ,
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductManageHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], BaseViewDetailsComponent);
    return BaseViewDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product-view/bean/base-product-view.bean.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product-view/bean/base-product-view.bean.ts ***!
  \********************************************************************************************************/
/*! exports provided: BasicVBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicVBean", function() { return BasicVBean; });
var BasicVBean = /** @class */ (function () {
    function BasicVBean() {
        this.productId = ''; //			基础产品模板编号	String(20)
        // productStatus: string = '02';  //产品状态
        this.pageSize = 10; //			每页显示数量	String(20)
        this.pageNum = 1; //		当前页	String(20)
        this.status = ''; //产品状态(新)
    }
    return BasicVBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product.module.ts ***!
  \******************************************************************************/
/*! exports provided: BaseProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseProductModule", function() { return BaseProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _base_product_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-product.routing */ "./src/app/pages/tzb/product-manage/base-product/base-product.routing.ts");
/* harmony import */ var _base_product_view_base_product_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-product-view/base-product-view.component */ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-product-view.component.ts");
/* harmony import */ var _base_product_config_base_product_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base-product-config/base-product-config.component */ "./src/app/pages/tzb/product-manage/base-product/base-product-config/base-product-config.component.ts");
/* harmony import */ var _base_product_view_base_view_details_base_view_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-product-view/base-view-details/base-view-details.component */ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-view-details/base-view-details.component.ts");
/* harmony import */ var _base_product_modify_base_product_modify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base-product-modify/base-product-modify.component */ "./src/app/pages/tzb/product-manage/base-product/base-product-modify/base-product-modify.component.ts");
/* harmony import */ var _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@uisftech/tzb/upaginator/upaginator.module */ "./src/app/@uisftech/tzb/upaginator/upaginator.module.ts");
/* harmony import */ var _base_product_config_choose_copy_add_choose_copy_adds_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base-product-config/choose-copy-add/choose-copy-adds.component */ "./src/app/pages/tzb/product-manage/base-product/base-product-config/choose-copy-add/choose-copy-adds.component.ts");
/* harmony import */ var _base_product_modify_surveyApplTypeList_add_surveyApplTypeList_adds_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./base-product-modify/surveyApplTypeList-add/surveyApplTypeList-adds.component */ "./src/app/pages/tzb/product-manage/base-product/base-product-modify/surveyApplTypeList-add/surveyApplTypeList-adds.component.ts");
/* harmony import */ var _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../@uisftech/tzb/udatatable/datatable */ "./src/app/@uisftech/tzb/udatatable/datatable.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//客户组件



//页面
 //基础产品配置-基础产品查看
 //基础产品配置-基础产品配置
 //基础产品配置-基础产品详情





var BaseProductModule = /** @class */ (function () {
    function BaseProductModule() {
    }
    BaseProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _base_product_routing__WEBPACK_IMPORTED_MODULE_3__["BaseProductRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__["SharedBasisModule"],
                _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_11__["UDataTableModule"],
                _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_8__["UPaginatorModule"],
            ],
            declarations: [
                _base_product_view_base_product_view_component__WEBPACK_IMPORTED_MODULE_4__["BaseProductViewComponent"],
                _base_product_config_base_product_config_component__WEBPACK_IMPORTED_MODULE_5__["BaseProductConfigComponent"],
                _base_product_view_base_view_details_base_view_details_component__WEBPACK_IMPORTED_MODULE_6__["BaseViewDetailsComponent"],
                _base_product_modify_base_product_modify_component__WEBPACK_IMPORTED_MODULE_7__["BaseProductModifyComponent"],
                _base_product_config_choose_copy_add_choose_copy_adds_component__WEBPACK_IMPORTED_MODULE_9__["ChooseCopyAddsComponent"],
                _base_product_modify_surveyApplTypeList_add_surveyApplTypeList_adds_component__WEBPACK_IMPORTED_MODULE_10__["SurveyApplTypeListAddsComponent"],
            ],
            exports: [
                _base_product_view_base_view_details_base_view_details_component__WEBPACK_IMPORTED_MODULE_6__["BaseViewDetailsComponent"],
                _base_product_modify_surveyApplTypeList_add_surveyApplTypeList_adds_component__WEBPACK_IMPORTED_MODULE_10__["SurveyApplTypeListAddsComponent"],
                _base_product_config_choose_copy_add_choose_copy_adds_component__WEBPACK_IMPORTED_MODULE_9__["ChooseCopyAddsComponent"],
            ],
            entryComponents: [],
            providers: []
        })
    ], BaseProductModule);
    return BaseProductModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/base-product/base-product.routing.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/base-product/base-product.routing.ts ***!
  \*******************************************************************************/
/*! exports provided: BaseProductRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseProductRouting", function() { return BaseProductRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_product_view_base_product_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-product-view/base-product-view.component */ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-product-view.component.ts");
/* harmony import */ var _base_product_config_base_product_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-product-config/base-product-config.component */ "./src/app/pages/tzb/product-manage/base-product/base-product-config/base-product-config.component.ts");
/* harmony import */ var _base_product_modify_base_product_modify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-product-modify/base-product-modify.component */ "./src/app/pages/tzb/product-manage/base-product/base-product-modify/base-product-modify.component.ts");

//页面
 //基础产品配置-基础产品查看
 //基础产品配置-基础产品配置
 //基础产品配置-基础产品修改
var routes = [
    {
        path: 'base-product-view', component: _base_product_view_base_product_view_component__WEBPACK_IMPORTED_MODULE_1__["BaseProductViewComponent"],
    },
    {
        path: 'base-product-config', component: _base_product_config_base_product_config_component__WEBPACK_IMPORTED_MODULE_2__["BaseProductConfigComponent"],
    },
    {
        path: 'base-product-modify', component: _base_product_modify_base_product_modify_component__WEBPACK_IMPORTED_MODULE_3__["BaseProductModifyComponent"],
    },
];
var BaseProductRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=default~available-product-available-product-module~base-product-base-product-module~product-function~1b529e00.js.map