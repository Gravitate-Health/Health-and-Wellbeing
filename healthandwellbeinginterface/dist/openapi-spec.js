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
const application_1 = require("./application");
/**
 * Export the OpenAPI spec from the application
 */
async function exportOpenApiSpec() {
    var _a, _b, _c;
    const config = {
        rest: {
            port: +((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000),
            host: (_b = process.env.HOST) !== null && _b !== void 0 ? _b : 'localhost',
        },
    };
    const outFile = (_c = process.argv[2]) !== null && _c !== void 0 ? _c : '';
    const app = new application_1.HealthandwellbeinginterfaceApplication(config);
    await app.boot();
    await app.exportOpenApiSpec(outFile);
}
exportOpenApiSpec().catch(err => {
    console.error('Fail to export OpenAPI spec from the application.', err);
    process.exit(1);
});
//# sourceMappingURL=openapi-spec.js.map