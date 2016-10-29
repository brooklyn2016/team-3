//
//  LoginViewController.swift
//  Cruzin
//
//  Created by Scott Russell on 10/29/16.
//  Copyright © 2016 Scott. All rights reserved.
//

import UIKit

class LoginViewController: UIViewController {
    @IBOutlet var username:UITextField!
    @IBOutlet var password:UITextField!

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
    
    @IBAction func loginPressed(sender:UIButton) {
        //Make get requests to check whether or not the user exists
        //Have to work some magic to check to see if user has logged in before
        if (self.username.text == "" || self.password.text == "") {
            let alert = UIAlertController(title: "Cruzin", message: "Please fill out all fields.", preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "Okay", style: .cancel, handler: nil))
            self.present(alert, animated: true, completion: nil)
            return
        }
        
        let userExists:Bool = true
        if (userExists) {
            //self.performSegue(withIdentifier: "ShowViewController", sender: nil)
            self.dismiss(animated: true, completion: nil)
        } else {
            let alert = UIAlertController(title: "Cruzin", message: "I'm sorry, but that username or password was incorrect.", preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "Okay", style: .cancel, handler: nil))
            self.present(alert, animated: true, completion: nil)
        }
    }
    
    @IBAction func signupPressed(sender:UIButton) {
        //User wants to create an account
        self.performSegue(withIdentifier: "ShowSignUpViewController", sender: nil)
    }
    
}
