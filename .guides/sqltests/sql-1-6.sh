#!/bin/bash
QCOUNT=2
sed -i "s@\\\040@ @g" $hist_file

# Run test
function test_command {
	(( COUNT ++ ))
	if [[ $COUNT -le $QCOUNT ]]; then
		case $COUNT in
      1 )
        expect_command "SELECT * FROM company_profiles LIMIT 5;" "Select all the records from the company_profiles table and limit them to 5 rows only"
        ;;
      2 )
        expect_command "SELECT id,company_name FROM company_profiles ORDER BY id DESC;" "Select only the id and the company_name columns from the company_profiles table and sort them by id in descending order"
        ;;
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command