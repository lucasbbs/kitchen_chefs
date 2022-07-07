<?php
require(__DIR__ . "/../vendor/autoload.php");

use Algolia\AlgoliaSearch\SearchClient;

# Connect and authenticate with your Algolia app
$client = SearchClient::create("JVFPGN3Q8V", "d887555835ae4a58e0d77449868a7bc1");

# Create a new index and add a record
$index = $client->initIndex("kitchen_cheffs");
$record = ["objectID" => 1, "name" => "kitchen_cheffs"];
$index->saveObject($record)->wait();

# Search the index and print the results
$results = $index->search("Aaron");
var_dump($results["hits"][0]);
