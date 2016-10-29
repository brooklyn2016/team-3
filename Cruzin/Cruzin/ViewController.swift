//
//  ViewController.swift
//  Cruzin
//
//  Created by Scott Russell on 10/29/16.
//  Copyright © 2016 Scott. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func modulePressed(sender:UIButton) {
        self.performSegue(withIdentifier: "ShowLevelViewController", sender: sender.tag)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let module = sender as! Int
        let viewController = segue.destination as! LevelViewController
        var module_name = ""
        switch (module) {
        case 1:
            module_name = "Materials Science"
            break
        case 2:
            module_name = "Newton's Motion (A)"
            break
        case 3:
            module_name = "Newton's Motion (B)"
            break
        case 4:
            module_name = "Body Sciences"
            break
        case 5:
            module_name = "Soundwaves"
            break
        case 6:
            module_name = "Kinesiology"
            break
        default:
            break
        }
        
        viewController.cat_title = module_name
    }
}

