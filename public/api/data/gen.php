<?php

$posts = [];

for($i=1;$i<101;$i++){
	$posts[$i] = [
		"title" => "запись " . $i,
	    "descr" => "dio esse rerum omnis laboriosam voluptate repudiandae",
	    "thumb" => "https://data.europa.eu/sites/default/files/news/2020-08-06-edp_book_club.png",
	    "detail_url" => "/blog-detail/" . $i,
	    "content" => file_get_contents("http://loripsum.net/api/10/link/ul/medium/decorate/bq")
	];
}

file_put_contents( __DIR__ . "/blog_list.txt", json_encode( $posts ) );