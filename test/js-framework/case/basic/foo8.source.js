/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
define('@weex-component/foo8', function (require, exports, module) {

;
  module.exports = {
    data: function () {return {
      itemList: [
        {itemId: '520421163634', title: 'title1', pictureUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        {itemId: '522076777462', title: 'title2', pictureUrl: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'}
      ]
    }},
    methods: {
      gotoDetail: function () {
        this.$openURL('https://item.taobao.com/item.htm?id=' + this.itemId)
      }
    }
  }


;module.exports.style = {
  "thumb": {
    "width": 200,
    "height": 200
  },
  "title": {
    "flex": 1,
    "color": "#ff0000",
    "fontSize": 48,
    "fontWeight": "bold",
    "backgroundColor": "#eeeeee"
  }
}

;module.exports.template = {
  "type": "container",
  "children": [
    {
      "type": "container",
      "repeat": function () {return this.itemList},
      "events": {
        "click": "gotoDetail"
      },
      "style": {
        "flexDirection": "row"
      },
      "children": [
        {
          "type": "image",
          "classList": [
            "thumb"
          ],
          "attr": {
            "src": function () {return this.pictureUrl}
          }
        },
        {
          "type": "text",
          "classList": [
            "title"
          ],
          "attr": {
            "value": function () {return this.title}
          }
        }
      ]
    }
  ]
}

;})

// require module

bootstrap('@weex-component/foo8')
