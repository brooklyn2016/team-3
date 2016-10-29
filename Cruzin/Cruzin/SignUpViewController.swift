//
//  SignUpViewController.swift
//  Cruzin
//
//  Created by Scott Russell on 10/29/16.
//  Copyright © 2016 Scott. All rights reserved.
//

import UIKit
import Alamofire

class SignUpViewController: UIViewController {
    @IBOutlet var firstName:UITextField!
    @IBOutlet var lastName:UITextField!
    @IBOutlet var username:UITextField!
    @IBOutlet var password:UITextField!
    @IBOutlet var confirm:UITextField!

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let tap = UITapGestureRecognizer(target: self, action: #selector(SignUpViewController.resignKeyboard))
        self.view.addGestureRecognizer(tap)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func resignKeyboard() {
        self.view.endEditing(true)
    }
    
    @IBAction func backPressed(sender:UIButton) {
        self.dismiss(animated: true, completion: nil)
    }
    
    @IBAction func submitPressed(sender:UIButton) {
        if (self.firstName.text == "" || self.lastName.text == "" || self.username.text == "" || self.password.text == "" || self.confirm.text == "") {
            self.displayAlert(message: "Please fill out all fields.")
            return
        } else if (self.password.text != self.confirm.text) {
            self.displayAlert(message: "Passwords do not match.")
            return
        }
        
        //Post data and save local data
        let currentDate = NSDate()
        
        
        self.presentingViewController?.presentingViewController?.dismiss(animated: true, completion: nil)
    }
    
    func displayAlert(message:String) {
        let alert = UIAlertController(title: "Cruzin", message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "Okay", style: .cancel, handler: nil))
        self.present(alert, animated: true, completion: nil)
    }
}
