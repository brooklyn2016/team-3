//
//  LevelViewController.swift
//  Cruzin
//
//  Created by Scott Russell on 10/29/16.
//  Copyright © 2016 Scott. All rights reserved.
//

import UIKit

class LevelViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    @IBOutlet var tableView:UITableView!
    @IBOutlet var categoryTitle:UILabel!
    
    var cat_title:String = ""
    var module:Int = 0
    var levels:[String] = ["Introduction", "Important Terms", "Challenge", "Relationship to Football", "Review"]
    var userLevel:Int = 2       //For testing, set to 2, for production set to 0

    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.tableView.separatorStyle = .none
        self.categoryTitle.text = self.cat_title
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func backPressed(sender:UIButton) {
        self.navigationController?.popViewController(animated: true)
    }
    
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return levels.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "level") as! LevelTableViewCell
        
        cell.contentView.backgroundColor = UIColor.clear
        cell.backgroundColor = UIColor.clear
        cell.line.alpha = 0.0
        cell.lock1.alpha = 0.0
        cell.lock2.alpha = 0.0
        cell.number.text = "\(indexPath.row + 1)"
        cell.title.text = self.levels[indexPath.row]
        
        return cell
    }
}
