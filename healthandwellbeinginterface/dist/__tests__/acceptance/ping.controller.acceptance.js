"use strict";
// Copyright 2022 Universidad Politécnica de Madrid
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const test_helper_1 = require("./test-helper");
describe('PingController', () => {
    let app;
    let client;
    before('setupApplication', async () => {
        ({ app, client } = await (0, test_helper_1.setupApplication)());
    });
    after(async () => {
        await app.stop();
    });
    it('invokes GET /ping', async () => {
        const res = await client.get('/ping?msg=world').expect(200);
        (0, testlab_1.expect)(res.body).to.containEql({ greeting: 'Hello from LoopBack' });
    });
});
//# sourceMappingURL=ping.controller.acceptance.js.map