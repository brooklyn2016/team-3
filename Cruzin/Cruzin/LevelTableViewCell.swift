//
//  LevelTableViewCell.swift
//  Cruzin
//
//  Created by Scott Russell on 10/29/16.
//  Copyright © 2016 Scott. All rights reserved.
//

import UIKit

class LevelTableViewCell: UITableViewCell {
    @IBOutlet var line:UIImageView!
    @IBOutlet var lock1:UIImageView!
    @IBOutlet var lock2:UIImageView!
    @IBOutlet var number:UILabel!
    @IBOutlet var title:UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
