import { takeLatest } from "redux-saga/effects";

import {
  GET_PRODUCT_PROGRESS,
  POST_PRODUCT_PROGRESS,
} from "../../admin/action/action";

import {
  handle_get_product_api,
  handle_post_product_api,
} from "../admin/manageProduct";

// get product saga
export function* get_product_saga() {
  yield takeLatest(GET_PRODUCT_PROGRESS, handle_get_product_api);
}

// post product saga
export function* post_product_saga() {
  yield takeLatest(POST_PRODUCT_PROGRESS, handle_post_product_api);
}
