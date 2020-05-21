//
//  GetBundleId.swift
//  realisern
//
//  Created by Алексей Самойленко on 5/21/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import UIKit
@objc(GetBundleId)

class GetBundleId: NSObject, RCTBridgeModule {
  static func moduleName() -> String {
    return "BundleId"
  }
  static func requireMainQueueSetup () -> Bool {
    return true;
  }
  
  @objc
  func getBundleId(_ message:NSString, duration:Double) -> Void {
    let alert = UIAlertController(title: nil, message: message as String, preferredStyle:.alert);
    let seconds: Double = duration;
    alert.view.backgroundColor = .black;
    alert.view.alpha = 0.5;
    alert.view.layer.cornerRadius = 14;
    
    DispatchQueue.main.async {
      (UIApplication.shared.delegate as? AppDelegate)?.window.rootViewController?.present(alert, animated: true, completion: nil)
    }
    DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + seconds, execute: { alert.dismiss(animated: true, completion: nil); })
  }

}

