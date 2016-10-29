//
//  IntroductionViewController.swift
//  Cruzin
//
//  Created by Scott Russell on 10/29/16.
//  Copyright © 2016 Scott. All rights reserved.
//

import UIKit
import MediaPlayer
import AVKit

class IntroductionViewController: UIViewController {
    @IBOutlet var videoView:UIView!
    @IBOutlet var pdfView_1:UIWebView!
    @IBOutlet var pdfView:UIWebView!
    
    var level:Int = 0
    
    var player:AVPlayer!
    var avpController:AVPlayerViewController!

    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.pdfView.alpha = 1
        self.pdfView_1.alpha = 0
        self.videoView.alpha = 0
        
        switch (self.level) {
        case 1:
            self.pdfView.alpha = 0
            self.pdfView_1.alpha = 1
            self.videoView.alpha = 1
            
            let videoURL = NSURL(fileURLWithPath: Bundle.main.path(forResource: "Curriculum/Module3/video", ofType: "mp4")!)
            let item = AVPlayerItem(url: videoURL as URL)
            self.player = AVPlayer(playerItem:item)
            self.avpController = AVPlayerViewController()
            self.avpController.player = self.player
            self.avpController.view.frame = self.videoView.frame
            self.addChildViewController(self.avpController)
            self.videoView.addSubview(avpController.view)
            
            let pdfLoc = NSURL(fileURLWithPath: Bundle.main.path(forResource: "Curriculum/Module3/background", ofType: "pdf")!)
            let request = NSURLRequest(url: pdfLoc as URL)
            self.pdfView_1.loadRequest(request as URLRequest)
        case 2:
            let pdfLoc = NSURL(fileURLWithPath: Bundle.main.path(forResource: "Curriculum/Module3/key_terms", ofType: "pdf")!)
            let request = NSURLRequest(url: pdfLoc as URL)
            self.pdfView.loadRequest(request as URLRequest)
            break
        case 3:
            let pdfLoc = NSURL(fileURLWithPath: Bundle.main.path(forResource: "Curriculum/Module3/challenge", ofType: "pdf")!)
            let request = NSURLRequest(url: pdfLoc as URL)
            self.pdfView.loadRequest(request as URLRequest)
            break
        case 4:
            let pdfLoc = NSURL(fileURLWithPath: Bundle.main.path(forResource: "Curriculum/Module3/relation", ofType: "pdf")!)
            let request = NSURLRequest(url: pdfLoc as URL)
            self.pdfView.loadRequest(request as URLRequest)
            break
        case 5:
            let pdfLoc = NSURL(fileURLWithPath: Bundle.main.path(forResource: "Curriculum/Module3/review", ofType: "pdf")!)
            let request = NSURLRequest(url: pdfLoc as URL)
            self.pdfView.loadRequest(request as URLRequest)
            break
        default:
            break
        }
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func backPressed(sender:UIButton) {
        self.navigationController?.popViewController(animated: true)
    }

}
