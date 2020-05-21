//
//  Counter.swift
//  realisern
//
//  Created by Алексей Самойленко on 5/21/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation

@objc(Counter)
class Counter: NSObject {
  let count = 1;
  @objc
  func getCount(_ callback: RCTResponseSenderBlock) {
    callback([Bundle.main.bundleIdentifier])
  }
}
